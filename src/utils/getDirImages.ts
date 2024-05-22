import fs from 'fs';

import path from 'path'

const getDirImages = (directoryPath: string) => {
  const files = fs.readdirSync(directoryPath);

  const imageFiles = files
    .filter((file) => path.extname(file) === '.jpg')
    .map((img) => ({
      src: `/images/science-fair/${img}`,
    }));

  return imageFiles;
}


export default getDirImages;