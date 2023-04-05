
import { v4 as uuidv4 } from 'uuid';
import { diskStorage } from 'multer';
import path, { extname } from 'path';

export const storage = {
    storage: diskStorage({
        destination: './public/files',
        filename: (req, file, callback) => {
          const uniqueSuffix =
              Date.now() + '-' + Math.round(Math.random() * 1e9);
            const ext = extname(file.originalname);
            const filename = `${uniqueSuffix}${ext}`;
            callback(null, filename);
          },
    })
  
  }