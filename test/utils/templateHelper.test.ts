import {expect, test} from '@oclif/test'
import {getTemplateDir, TemplateType, copyTemplates} from '../../src/utils/templateHelper';
import {existsSync, mkdirSync} from "fs";

describe('templateHelpler test', () => {
  test.it('run getTemplateDir', () => {
    const dir = getTemplateDir({
      version: '2',
      useTypescript:false, type: TemplateType.pc
    });
    console.log(dir);
    expect(dir).to.equal('F:\\work_zone\\sweet-vue\\templates\\pc\\v2\\js')
  });
  test.it('run copyTemplates',async () => {
    if (!existsSync('appTest')) {
      mkdirSync('appTest');
    }
    const dir = await copyTemplates('F:\\work_zone\\sweet-vue\\templates\\pc\\v2\\js', 'appTest', {projectName: 'appTest', description: '测试'});
    console.log(dir);
    // expect(dir).to.equal('F:\\work_zone\\templates\\pc\\v2\\js')
  });
})
