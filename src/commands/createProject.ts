import {Command, flags} from '@oclif/command'
import {resolve} from "path";
import {createProjectDir} from "../utils/io/fileHelper";
import {copyTemplates, getTemplateDir, TemplateType} from "../utils/templateHelper";
import * as execa from "execa";

export default class CreateProject extends Command {
  static description = 'describe the command here'

  static examples = [
    `$ sweet-vue hello
hello world from ./src/hello.ts!
`,
  ]

  static flags = {
    help: flags.help({char: 'h'}),
    useTypescript: flags.boolean({char: 't', description: 'use typescript', default: false}),
    version: flags.string({char: 'v', description: 'vue version 2|3(TODO)', default: '2'}),
    description: flags.string({char: 'd', description: 'application description', default: 'a sweet app description'}),
    appType: flags.string({char: 'a', description: 'appType -> pc | mobile', default: 'pc'})
  }

  static args = [
    {name: 'projectName', required: true},
    {name: 'dest'}
  ]

  async run() {
    const {args, flags} = this.parse(CreateProject);
    this.log('args is ', JSON.stringify(args));
    const {useTypescript, version, appType, description} = flags;
    const { projectName, dest = process.cwd() } = args;
    this.log('args is ', args);
    this.log('flag is ', flags);

    const projectDir = resolve(dest, projectName);
    createProjectDir(projectDir);
     const templateDir = getTemplateDir({
        type: appType as TemplateType,
        useTypescript,
        version
      });
    await copyTemplates(templateDir,projectDir, {
      projectName,
      description
    } );
    process.chdir(projectDir);
    const task = execa('npm.cmd', ['install'], {stdin: 'inherit'});
  }

  private copyTemplate () {

  }

}
