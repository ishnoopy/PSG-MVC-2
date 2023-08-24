import fs from 'fs';
import path from 'path';

const controllersDir = path.join(process.cwd(), 'controllers');
const controllerFiles = fs.readdirSync(controllersDir);

// Store the controller file name in an object.
const controllers = {};
for (const file of controllerFiles) {
  const controllerName = path.basename(file, '.js');
  const ControllerModule = await import(path.join(controllersDir, file));
  const ControllerClass = ControllerModule.default; // Make sure the default export is the constructor
  controllers[controllerName] = new ControllerClass();
}

// Export the controllers object.
export default controllers;
