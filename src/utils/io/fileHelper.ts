import {existsSync, mkdirSync, PathLike} from "fs";

export const createProjectDir = (dir: PathLike) => {
  if (existsSync(dir)) {
    throw new Error(`project dir is existed, please create a new directory`);
  }
  mkdirSync(dir, {recursive: true});
}
