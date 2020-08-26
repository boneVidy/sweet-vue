import {extname, resolve} from "path";
import { readFileSync} from "fs";
import {copy, createFile, readdir, writeFile} from 'fs-extra';
import {render, renderFile} from 'ejs';
export const enum TemplateType  {
  mobile = 'mobile',
  pc = 'pc'
}

type GetTemplateDirOption = {
  version: string;
  useTypescript: boolean;
  type: TemplateType
};
export const getTemplateDir = (options: GetTemplateDirOption) => {
  console.log('__dirname',__dirname, __filename, process.cwd());
  const dir = resolve(__dirname,'..', '..', 'templates', options.type, `v${options.version}`, options.useTypescript ? 'ts':'js' );
  console.log('template dir is ',dir);
  return dir;
};

export const copyTemplates = async (templateDir: string, dest: string, context: {projectName: string; description: string}) => {
  await copy(templateDir, dest, {
    recursive: true,
    filter(src: string) {
      return extname(src) !== 'ejs';
    }
  });
  const dirs = await readdir(resolve(templateDir, 'ejs'));
  const reg = /\.ejs$/;
  console.log('ejs dirs', dirs);
  await Promise.all(dirs.map((item: string) => {
    const fileName = item.replace(reg, '');
    const absolutePath = resolve(templateDir, 'ejs', item)
    return parseEjs(absolutePath, resolve(dest, fileName ), context)
  }))

};

const parseEjs = async (ejsPath: string, dest: string, context: {[key: string]: any}) => {
  const rawString = readFileSync(ejsPath);
  await createFile(dest);
  const ret = await render(rawString.toString(), context, { async: true});
  await writeFile(dest, ret);
};
