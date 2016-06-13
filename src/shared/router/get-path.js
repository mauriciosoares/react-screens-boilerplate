import * as paths from './paths';
import error from 'shared/utils/error';

export default function getPath(path) {
  if(!paths[path]) {
    error(`path ${path} does not exists`);
  }

  return paths[path];
}
