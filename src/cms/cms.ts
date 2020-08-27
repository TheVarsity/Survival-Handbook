import CMS from 'netlify-cms-app';
import cloudinary from 'netlify-cms-media-library-cloudinary';
import uploadcare from 'netlify-cms-media-library-uploadcare';

import AboutPagePreview from './preview-templates/AboutPagePreview';
import ArticlePostPreview from './preview-templates/ArticlePostPreview';
import IndexPagePreview from './preview-templates/IndexPagePreview';
import ListArticlePostPreview from './preview-templates/List-ArticlePostPreview';

CMS.registerMediaLibrary(uploadcare);
CMS.registerMediaLibrary(cloudinary);

CMS.registerPreviewTemplate('index', IndexPagePreview);
CMS.registerPreviewTemplate('about', AboutPagePreview);
CMS.registerPreviewTemplate('list-articles', ListArticlePostPreview);
CMS.registerPreviewTemplate('articles', ArticlePostPreview);
