import fs from 'fs';
import path from 'path';

const middlewaresDir = path.join(process.cwd(), 'utilities/middlewares');
const middlewareFiles = fs.readdirSync(middlewaresDir);

const middlewares = {};
for(const file of middlewareFiles) {
  const middlewareName = path.basename(file, '.js');
  const firstWord = middlewareName.split('.')[0]; // Get the first word before the first dot
  const middleWareFunction = await import(path.join(middlewaresDir, file));

  middlewares[firstWord] = middleWareFunction;
}

export default middlewares;