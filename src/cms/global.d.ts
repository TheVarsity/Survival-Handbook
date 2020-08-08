declare module 'netlify-cms-app' {
    function registerPreviewTemplate(name: string, component): void;
    function registerMediaLibrary(mediaLibrary: { name: string }): void;
}

declare module 'netlify-cms-media-library-cloudinary' {
    export default {
        name: string
    };
}

declare module 'netlify-cms-media-library-uploadcare' {
    export default {
        name: string
    };
}

type PreviewProps = {
    entry: {
        getIn: (value: string[]) => any;
    };
    widgetFor: (value: string) => any;
};
