import fs from 'fs';

import path from 'path';

const getDirImages = (directoryPath: string) => {
  const files = fs.readdirSync(`./public${directoryPath}`);

  const imageFiles = files
    .filter((file) =>
      ['.jpg', '.jpeg', '.png'].includes(path.extname(file).toLowerCase())
    )
    .map((img) => ({
      src: `${directoryPath}/${img}`,
    }));

  return imageFiles;
};

export default getDirImages;
