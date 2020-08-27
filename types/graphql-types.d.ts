export type Maybe<T> = T | null;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
    ID: string;
    String: string;
    Boolean: boolean;
    Int: number;
    Float: number;
    /**
     * A date string, such as 2007-12-03, compliant with the ISO 8601 standard for
     * representation of dates and times using the Gregorian calendar.
     */
    Date: any;
    /** The `JSON` scalar type represents JSON values as specified by [ECMA-404](http://www.ecma-international.org/publications/files/ECMA-ST/ECMA-404.pdf). */
    JSON: any;
};

export type BooleanQueryOperatorInput = {
    eq?: Maybe<Scalars['Boolean']>;
    ne?: Maybe<Scalars['Boolean']>;
    in?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Boolean']>>>;
};

export type DateQueryOperatorInput = {
    eq?: Maybe<Scalars['Date']>;
    ne?: Maybe<Scalars['Date']>;
    gt?: Maybe<Scalars['Date']>;
    gte?: Maybe<Scalars['Date']>;
    lt?: Maybe<Scalars['Date']>;
    lte?: Maybe<Scalars['Date']>;
    in?: Maybe<Array<Maybe<Scalars['Date']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Date']>>>;
};

export type Directory = Node & {
    sourceInstanceName: Scalars['String'];
    absolutePath: Scalars['String'];
    relativePath: Scalars['String'];
    extension: Scalars['String'];
    size: Scalars['Int'];
    prettySize: Scalars['String'];
    modifiedTime: Scalars['Date'];
    accessTime: Scalars['Date'];
    changeTime: Scalars['Date'];
    birthTime: Scalars['Date'];
    root: Scalars['String'];
    dir: Scalars['String'];
    base: Scalars['String'];
    ext: Scalars['String'];
    name: Scalars['String'];
    relativeDirectory: Scalars['String'];
    dev: Scalars['Int'];
    mode: Scalars['Int'];
    nlink: Scalars['Int'];
    uid: Scalars['Int'];
    gid: Scalars['Int'];
    rdev: Scalars['Int'];
    ino: Scalars['Float'];
    atimeMs: Scalars['Float'];
    mtimeMs: Scalars['Float'];
    ctimeMs: Scalars['Float'];
    atime: Scalars['Date'];
    mtime: Scalars['Date'];
    ctime: Scalars['Date'];
    /** @deprecated Use `birthTime` instead */
    birthtime?: Maybe<Scalars['Date']>;
    /** @deprecated Use `birthTime` instead */
    birthtimeMs?: Maybe<Scalars['Float']>;
    blksize?: Maybe<Scalars['Int']>;
    blocks?: Maybe<Scalars['Int']>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};

export type DirectoryModifiedTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryAccessTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryChangeTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryBirthTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryAtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryMtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryCtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type DirectoryConnection = {
    totalCount: Scalars['Int'];
    edges: Array<DirectoryEdge>;
    nodes: Array<Directory>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<DirectoryGroupConnection>;
};

export type DirectoryConnectionDistinctArgs = {
    field: DirectoryFieldsEnum;
};

export type DirectoryConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: DirectoryFieldsEnum;
};

export type DirectoryEdge = {
    next?: Maybe<Directory>;
    node: Directory;
    previous?: Maybe<Directory>;
};

export type DirectoryFieldsEnum =
    | 'sourceInstanceName'
    | 'absolutePath'
    | 'relativePath'
    | 'extension'
    | 'size'
    | 'prettySize'
    | 'modifiedTime'
    | 'accessTime'
    | 'changeTime'
    | 'birthTime'
    | 'root'
    | 'dir'
    | 'base'
    | 'ext'
    | 'name'
    | 'relativeDirectory'
    | 'dev'
    | 'mode'
    | 'nlink'
    | 'uid'
    | 'gid'
    | 'rdev'
    | 'ino'
    | 'atimeMs'
    | 'mtimeMs'
    | 'ctimeMs'
    | 'atime'
    | 'mtime'
    | 'ctime'
    | 'birthtime'
    | 'birthtimeMs'
    | 'blksize'
    | 'blocks'
    | 'id'
    | 'parent___id'
    | 'parent___parent___id'
    | 'parent___parent___parent___id'
    | 'parent___parent___parent___children'
    | 'parent___parent___children'
    | 'parent___parent___children___id'
    | 'parent___parent___children___children'
    | 'parent___parent___internal___content'
    | 'parent___parent___internal___contentDigest'
    | 'parent___parent___internal___description'
    | 'parent___parent___internal___fieldOwners'
    | 'parent___parent___internal___ignoreType'
    | 'parent___parent___internal___mediaType'
    | 'parent___parent___internal___owner'
    | 'parent___parent___internal___type'
    | 'parent___children'
    | 'parent___children___id'
    | 'parent___children___parent___id'
    | 'parent___children___parent___children'
    | 'parent___children___children'
    | 'parent___children___children___id'
    | 'parent___children___children___children'
    | 'parent___children___internal___content'
    | 'parent___children___internal___contentDigest'
    | 'parent___children___internal___description'
    | 'parent___children___internal___fieldOwners'
    | 'parent___children___internal___ignoreType'
    | 'parent___children___internal___mediaType'
    | 'parent___children___internal___owner'
    | 'parent___children___internal___type'
    | 'parent___internal___content'
    | 'parent___internal___contentDigest'
    | 'parent___internal___description'
    | 'parent___internal___fieldOwners'
    | 'parent___internal___ignoreType'
    | 'parent___internal___mediaType'
    | 'parent___internal___owner'
    | 'parent___internal___type'
    | 'children'
    | 'children___id'
    | 'children___parent___id'
    | 'children___parent___parent___id'
    | 'children___parent___parent___children'
    | 'children___parent___children'
    | 'children___parent___children___id'
    | 'children___parent___children___children'
    | 'children___parent___internal___content'
    | 'children___parent___internal___contentDigest'
    | 'children___parent___internal___description'
    | 'children___parent___internal___fieldOwners'
    | 'children___parent___internal___ignoreType'
    | 'children___parent___internal___mediaType'
    | 'children___parent___internal___owner'
    | 'children___parent___internal___type'
    | 'children___children'
    | 'children___children___id'
    | 'children___children___parent___id'
    | 'children___children___parent___children'
    | 'children___children___children'
    | 'children___children___children___id'
    | 'children___children___children___children'
    | 'children___children___internal___content'
    | 'children___children___internal___contentDigest'
    | 'children___children___internal___description'
    | 'children___children___internal___fieldOwners'
    | 'children___children___internal___ignoreType'
    | 'children___children___internal___mediaType'
    | 'children___children___internal___owner'
    | 'children___children___internal___type'
    | 'children___internal___content'
    | 'children___internal___contentDigest'
    | 'children___internal___description'
    | 'children___internal___fieldOwners'
    | 'children___internal___ignoreType'
    | 'children___internal___mediaType'
    | 'children___internal___owner'
    | 'children___internal___type'
    | 'internal___content'
    | 'internal___contentDigest'
    | 'internal___description'
    | 'internal___fieldOwners'
    | 'internal___ignoreType'
    | 'internal___mediaType'
    | 'internal___owner'
    | 'internal___type';

export type DirectoryFilterInput = {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type DirectoryGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<DirectoryEdge>;
    nodes: Array<Directory>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type DirectorySortInput = {
    fields?: Maybe<Array<Maybe<DirectoryFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type DuotoneGradient = {
    highlight: Scalars['String'];
    shadow: Scalars['String'];
    opacity?: Maybe<Scalars['Int']>;
};

export type File = Node & {
    sourceInstanceName: Scalars['String'];
    absolutePath: Scalars['String'];
    relativePath: Scalars['String'];
    extension: Scalars['String'];
    size: Scalars['Int'];
    prettySize: Scalars['String'];
    modifiedTime: Scalars['Date'];
    accessTime: Scalars['Date'];
    changeTime: Scalars['Date'];
    birthTime: Scalars['Date'];
    root: Scalars['String'];
    dir: Scalars['String'];
    base: Scalars['String'];
    ext: Scalars['String'];
    name: Scalars['String'];
    relativeDirectory: Scalars['String'];
    dev: Scalars['Int'];
    mode: Scalars['Int'];
    nlink: Scalars['Int'];
    uid: Scalars['Int'];
    gid: Scalars['Int'];
    rdev: Scalars['Int'];
    ino: Scalars['Float'];
    atimeMs: Scalars['Float'];
    mtimeMs: Scalars['Float'];
    ctimeMs: Scalars['Float'];
    atime: Scalars['Date'];
    mtime: Scalars['Date'];
    ctime: Scalars['Date'];
    /** @deprecated Use `birthTime` instead */
    birthtime?: Maybe<Scalars['Date']>;
    /** @deprecated Use `birthTime` instead */
    birthtimeMs?: Maybe<Scalars['Float']>;
    blksize?: Maybe<Scalars['Int']>;
    blocks?: Maybe<Scalars['Int']>;
    /** Copy file to static directory and return public url to it */
    publicURL?: Maybe<Scalars['String']>;
    childImageSharp?: Maybe<ImageSharp>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    childMarkdownRemark?: Maybe<MarkdownRemark>;
};

export type FileModifiedTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileAccessTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileChangeTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileBirthTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileAtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileMtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileCtimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type FileConnection = {
    totalCount: Scalars['Int'];
    edges: Array<FileEdge>;
    nodes: Array<File>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<FileGroupConnection>;
};

export type FileConnectionDistinctArgs = {
    field: FileFieldsEnum;
};

export type FileConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: FileFieldsEnum;
};

export type FileEdge = {
    next?: Maybe<File>;
    node: File;
    previous?: Maybe<File>;
};

export type FileFieldsEnum =
    | 'sourceInstanceName'
    | 'absolutePath'
    | 'relativePath'
    | 'extension'
    | 'size'
    | 'prettySize'
    | 'modifiedTime'
    | 'accessTime'
    | 'changeTime'
    | 'birthTime'
    | 'root'
    | 'dir'
    | 'base'
    | 'ext'
    | 'name'
    | 'relativeDirectory'
    | 'dev'
    | 'mode'
    | 'nlink'
    | 'uid'
    | 'gid'
    | 'rdev'
    | 'ino'
    | 'atimeMs'
    | 'mtimeMs'
    | 'ctimeMs'
    | 'atime'
    | 'mtime'
    | 'ctime'
    | 'birthtime'
    | 'birthtimeMs'
    | 'blksize'
    | 'blocks'
    | 'publicURL'
    | 'childImageSharp___fixed___base64'
    | 'childImageSharp___fixed___tracedSVG'
    | 'childImageSharp___fixed___aspectRatio'
    | 'childImageSharp___fixed___width'
    | 'childImageSharp___fixed___height'
    | 'childImageSharp___fixed___src'
    | 'childImageSharp___fixed___srcSet'
    | 'childImageSharp___fixed___srcWebp'
    | 'childImageSharp___fixed___srcSetWebp'
    | 'childImageSharp___fixed___originalName'
    | 'childImageSharp___resolutions___base64'
    | 'childImageSharp___resolutions___tracedSVG'
    | 'childImageSharp___resolutions___aspectRatio'
    | 'childImageSharp___resolutions___width'
    | 'childImageSharp___resolutions___height'
    | 'childImageSharp___resolutions___src'
    | 'childImageSharp___resolutions___srcSet'
    | 'childImageSharp___resolutions___srcWebp'
    | 'childImageSharp___resolutions___srcSetWebp'
    | 'childImageSharp___resolutions___originalName'
    | 'childImageSharp___fluid___base64'
    | 'childImageSharp___fluid___tracedSVG'
    | 'childImageSharp___fluid___aspectRatio'
    | 'childImageSharp___fluid___src'
    | 'childImageSharp___fluid___srcSet'
    | 'childImageSharp___fluid___srcWebp'
    | 'childImageSharp___fluid___srcSetWebp'
    | 'childImageSharp___fluid___sizes'
    | 'childImageSharp___fluid___originalImg'
    | 'childImageSharp___fluid___originalName'
    | 'childImageSharp___fluid___presentationWidth'
    | 'childImageSharp___fluid___presentationHeight'
    | 'childImageSharp___sizes___base64'
    | 'childImageSharp___sizes___tracedSVG'
    | 'childImageSharp___sizes___aspectRatio'
    | 'childImageSharp___sizes___src'
    | 'childImageSharp___sizes___srcSet'
    | 'childImageSharp___sizes___srcWebp'
    | 'childImageSharp___sizes___srcSetWebp'
    | 'childImageSharp___sizes___sizes'
    | 'childImageSharp___sizes___originalImg'
    | 'childImageSharp___sizes___originalName'
    | 'childImageSharp___sizes___presentationWidth'
    | 'childImageSharp___sizes___presentationHeight'
    | 'childImageSharp___original___width'
    | 'childImageSharp___original___height'
    | 'childImageSharp___original___src'
    | 'childImageSharp___resize___src'
    | 'childImageSharp___resize___tracedSVG'
    | 'childImageSharp___resize___width'
    | 'childImageSharp___resize___height'
    | 'childImageSharp___resize___aspectRatio'
    | 'childImageSharp___resize___originalName'
    | 'childImageSharp___id'
    | 'childImageSharp___parent___id'
    | 'childImageSharp___parent___parent___id'
    | 'childImageSharp___parent___parent___children'
    | 'childImageSharp___parent___children'
    | 'childImageSharp___parent___children___id'
    | 'childImageSharp___parent___children___children'
    | 'childImageSharp___parent___internal___content'
    | 'childImageSharp___parent___internal___contentDigest'
    | 'childImageSharp___parent___internal___description'
    | 'childImageSharp___parent___internal___fieldOwners'
    | 'childImageSharp___parent___internal___ignoreType'
    | 'childImageSharp___parent___internal___mediaType'
    | 'childImageSharp___parent___internal___owner'
    | 'childImageSharp___parent___internal___type'
    | 'childImageSharp___children'
    | 'childImageSharp___children___id'
    | 'childImageSharp___children___parent___id'
    | 'childImageSharp___children___parent___children'
    | 'childImageSharp___children___children'
    | 'childImageSharp___children___children___id'
    | 'childImageSharp___children___children___children'
    | 'childImageSharp___children___internal___content'
    | 'childImageSharp___children___internal___contentDigest'
    | 'childImageSharp___children___internal___description'
    | 'childImageSharp___children___internal___fieldOwners'
    | 'childImageSharp___children___internal___ignoreType'
    | 'childImageSharp___children___internal___mediaType'
    | 'childImageSharp___children___internal___owner'
    | 'childImageSharp___children___internal___type'
    | 'childImageSharp___internal___content'
    | 'childImageSharp___internal___contentDigest'
    | 'childImageSharp___internal___description'
    | 'childImageSharp___internal___fieldOwners'
    | 'childImageSharp___internal___ignoreType'
    | 'childImageSharp___internal___mediaType'
    | 'childImageSharp___internal___owner'
    | 'childImageSharp___internal___type'
    | 'id'
    | 'parent___id'
    | 'parent___parent___id'
    | 'parent___parent___parent___id'
    | 'parent___parent___parent___children'
    | 'parent___parent___children'
    | 'parent___parent___children___id'
    | 'parent___parent___children___children'
    | 'parent___parent___internal___content'
    | 'parent___parent___internal___contentDigest'
    | 'parent___parent___internal___description'
    | 'parent___parent___internal___fieldOwners'
    | 'parent___parent___internal___ignoreType'
    | 'parent___parent___internal___mediaType'
    | 'parent___parent___internal___owner'
    | 'parent___parent___internal___type'
    | 'parent___children'
    | 'parent___children___id'
    | 'parent___children___parent___id'
    | 'parent___children___parent___children'
    | 'parent___children___children'
    | 'parent___children___children___id'
    | 'parent___children___children___children'
    | 'parent___children___internal___content'
    | 'parent___children___internal___contentDigest'
    | 'parent___children___internal___description'
    | 'parent___children___internal___fieldOwners'
    | 'parent___children___internal___ignoreType'
    | 'parent___children___internal___mediaType'
    | 'parent___children___internal___owner'
    | 'parent___children___internal___type'
    | 'parent___internal___content'
    | 'parent___internal___contentDigest'
    | 'parent___internal___description'
    | 'parent___internal___fieldOwners'
    | 'parent___internal___ignoreType'
    | 'parent___internal___mediaType'
    | 'parent___internal___owner'
    | 'parent___internal___type'
    | 'children'
    | 'children___id'
    | 'children___parent___id'
    | 'children___parent___parent___id'
    | 'children___parent___parent___children'
    | 'children___parent___children'
    | 'children___parent___children___id'
    | 'children___parent___children___children'
    | 'children___parent___internal___content'
    | 'children___parent___internal___contentDigest'
    | 'children___parent___internal___description'
    | 'children___parent___internal___fieldOwners'
    | 'children___parent___internal___ignoreType'
    | 'children___parent___internal___mediaType'
    | 'children___parent___internal___owner'
    | 'children___parent___internal___type'
    | 'children___children'
    | 'children___children___id'
    | 'children___children___parent___id'
    | 'children___children___parent___children'
    | 'children___children___children'
    | 'children___children___children___id'
    | 'children___children___children___children'
    | 'children___children___internal___content'
    | 'children___children___internal___contentDigest'
    | 'children___children___internal___description'
    | 'children___children___internal___fieldOwners'
    | 'children___children___internal___ignoreType'
    | 'children___children___internal___mediaType'
    | 'children___children___internal___owner'
    | 'children___children___internal___type'
    | 'children___internal___content'
    | 'children___internal___contentDigest'
    | 'children___internal___description'
    | 'children___internal___fieldOwners'
    | 'children___internal___ignoreType'
    | 'children___internal___mediaType'
    | 'children___internal___owner'
    | 'children___internal___type'
    | 'internal___content'
    | 'internal___contentDigest'
    | 'internal___description'
    | 'internal___fieldOwners'
    | 'internal___ignoreType'
    | 'internal___mediaType'
    | 'internal___owner'
    | 'internal___type'
    | 'childMarkdownRemark___id'
    | 'childMarkdownRemark___frontmatter___title'
    | 'childMarkdownRemark___frontmatter___templateKey'
    | 'childMarkdownRemark___frontmatter___image___sourceInstanceName'
    | 'childMarkdownRemark___frontmatter___image___absolutePath'
    | 'childMarkdownRemark___frontmatter___image___relativePath'
    | 'childMarkdownRemark___frontmatter___image___extension'
    | 'childMarkdownRemark___frontmatter___image___size'
    | 'childMarkdownRemark___frontmatter___image___prettySize'
    | 'childMarkdownRemark___frontmatter___image___modifiedTime'
    | 'childMarkdownRemark___frontmatter___image___accessTime'
    | 'childMarkdownRemark___frontmatter___image___changeTime'
    | 'childMarkdownRemark___frontmatter___image___birthTime'
    | 'childMarkdownRemark___frontmatter___image___root'
    | 'childMarkdownRemark___frontmatter___image___dir'
    | 'childMarkdownRemark___frontmatter___image___base'
    | 'childMarkdownRemark___frontmatter___image___ext'
    | 'childMarkdownRemark___frontmatter___image___name'
    | 'childMarkdownRemark___frontmatter___image___relativeDirectory'
    | 'childMarkdownRemark___frontmatter___image___dev'
    | 'childMarkdownRemark___frontmatter___image___mode'
    | 'childMarkdownRemark___frontmatter___image___nlink'
    | 'childMarkdownRemark___frontmatter___image___uid'
    | 'childMarkdownRemark___frontmatter___image___gid'
    | 'childMarkdownRemark___frontmatter___image___rdev'
    | 'childMarkdownRemark___frontmatter___image___ino'
    | 'childMarkdownRemark___frontmatter___image___atimeMs'
    | 'childMarkdownRemark___frontmatter___image___mtimeMs'
    | 'childMarkdownRemark___frontmatter___image___ctimeMs'
    | 'childMarkdownRemark___frontmatter___image___atime'
    | 'childMarkdownRemark___frontmatter___image___mtime'
    | 'childMarkdownRemark___frontmatter___image___ctime'
    | 'childMarkdownRemark___frontmatter___image___birthtime'
    | 'childMarkdownRemark___frontmatter___image___birthtimeMs'
    | 'childMarkdownRemark___frontmatter___image___blksize'
    | 'childMarkdownRemark___frontmatter___image___blocks'
    | 'childMarkdownRemark___frontmatter___image___publicURL'
    | 'childMarkdownRemark___frontmatter___image___id'
    | 'childMarkdownRemark___frontmatter___image___children'
    | 'childMarkdownRemark___frontmatter___cover___sourceInstanceName'
    | 'childMarkdownRemark___frontmatter___cover___absolutePath'
    | 'childMarkdownRemark___frontmatter___cover___relativePath'
    | 'childMarkdownRemark___frontmatter___cover___extension'
    | 'childMarkdownRemark___frontmatter___cover___size'
    | 'childMarkdownRemark___frontmatter___cover___prettySize'
    | 'childMarkdownRemark___frontmatter___cover___modifiedTime'
    | 'childMarkdownRemark___frontmatter___cover___accessTime'
    | 'childMarkdownRemark___frontmatter___cover___changeTime'
    | 'childMarkdownRemark___frontmatter___cover___birthTime'
    | 'childMarkdownRemark___frontmatter___cover___root'
    | 'childMarkdownRemark___frontmatter___cover___dir'
    | 'childMarkdownRemark___frontmatter___cover___base'
    | 'childMarkdownRemark___frontmatter___cover___ext'
    | 'childMarkdownRemark___frontmatter___cover___name'
    | 'childMarkdownRemark___frontmatter___cover___relativeDirectory'
    | 'childMarkdownRemark___frontmatter___cover___dev'
    | 'childMarkdownRemark___frontmatter___cover___mode'
    | 'childMarkdownRemark___frontmatter___cover___nlink'
    | 'childMarkdownRemark___frontmatter___cover___uid'
    | 'childMarkdownRemark___frontmatter___cover___gid'
    | 'childMarkdownRemark___frontmatter___cover___rdev'
    | 'childMarkdownRemark___frontmatter___cover___ino'
    | 'childMarkdownRemark___frontmatter___cover___atimeMs'
    | 'childMarkdownRemark___frontmatter___cover___mtimeMs'
    | 'childMarkdownRemark___frontmatter___cover___ctimeMs'
    | 'childMarkdownRemark___frontmatter___cover___atime'
    | 'childMarkdownRemark___frontmatter___cover___mtime'
    | 'childMarkdownRemark___frontmatter___cover___ctime'
    | 'childMarkdownRemark___frontmatter___cover___birthtime'
    | 'childMarkdownRemark___frontmatter___cover___birthtimeMs'
    | 'childMarkdownRemark___frontmatter___cover___blksize'
    | 'childMarkdownRemark___frontmatter___cover___blocks'
    | 'childMarkdownRemark___frontmatter___cover___publicURL'
    | 'childMarkdownRemark___frontmatter___cover___id'
    | 'childMarkdownRemark___frontmatter___cover___children'
    | 'childMarkdownRemark___frontmatter___heading'
    | 'childMarkdownRemark___frontmatter___subheading'
    | 'childMarkdownRemark___frontmatter___editorNote___title'
    | 'childMarkdownRemark___frontmatter___editorNote___description'
    | 'childMarkdownRemark___frontmatter___articles___blurbs'
    | 'childMarkdownRemark___frontmatter___articles___heading'
    | 'childMarkdownRemark___frontmatter___articles___description'
    | 'childMarkdownRemark___frontmatter___doodles'
    | 'childMarkdownRemark___frontmatter___main___heading'
    | 'childMarkdownRemark___frontmatter___main___description'
    | 'childMarkdownRemark___frontmatter___date'
    | 'childMarkdownRemark___frontmatter___featuredpost'
    | 'childMarkdownRemark___frontmatter___featuredimage___sourceInstanceName'
    | 'childMarkdownRemark___frontmatter___featuredimage___absolutePath'
    | 'childMarkdownRemark___frontmatter___featuredimage___relativePath'
    | 'childMarkdownRemark___frontmatter___featuredimage___extension'
    | 'childMarkdownRemark___frontmatter___featuredimage___size'
    | 'childMarkdownRemark___frontmatter___featuredimage___prettySize'
    | 'childMarkdownRemark___frontmatter___featuredimage___modifiedTime'
    | 'childMarkdownRemark___frontmatter___featuredimage___accessTime'
    | 'childMarkdownRemark___frontmatter___featuredimage___changeTime'
    | 'childMarkdownRemark___frontmatter___featuredimage___birthTime'
    | 'childMarkdownRemark___frontmatter___featuredimage___root'
    | 'childMarkdownRemark___frontmatter___featuredimage___dir'
    | 'childMarkdownRemark___frontmatter___featuredimage___base'
    | 'childMarkdownRemark___frontmatter___featuredimage___ext'
    | 'childMarkdownRemark___frontmatter___featuredimage___name'
    | 'childMarkdownRemark___frontmatter___featuredimage___relativeDirectory'
    | 'childMarkdownRemark___frontmatter___featuredimage___dev'
    | 'childMarkdownRemark___frontmatter___featuredimage___mode'
    | 'childMarkdownRemark___frontmatter___featuredimage___nlink'
    | 'childMarkdownRemark___frontmatter___featuredimage___uid'
    | 'childMarkdownRemark___frontmatter___featuredimage___gid'
    | 'childMarkdownRemark___frontmatter___featuredimage___rdev'
    | 'childMarkdownRemark___frontmatter___featuredimage___ino'
    | 'childMarkdownRemark___frontmatter___featuredimage___atimeMs'
    | 'childMarkdownRemark___frontmatter___featuredimage___mtimeMs'
    | 'childMarkdownRemark___frontmatter___featuredimage___ctimeMs'
    | 'childMarkdownRemark___frontmatter___featuredimage___atime'
    | 'childMarkdownRemark___frontmatter___featuredimage___mtime'
    | 'childMarkdownRemark___frontmatter___featuredimage___ctime'
    | 'childMarkdownRemark___frontmatter___featuredimage___birthtime'
    | 'childMarkdownRemark___frontmatter___featuredimage___birthtimeMs'
    | 'childMarkdownRemark___frontmatter___featuredimage___blksize'
    | 'childMarkdownRemark___frontmatter___featuredimage___blocks'
    | 'childMarkdownRemark___frontmatter___featuredimage___publicURL'
    | 'childMarkdownRemark___frontmatter___featuredimage___id'
    | 'childMarkdownRemark___frontmatter___featuredimage___children'
    | 'childMarkdownRemark___frontmatter___description'
    | 'childMarkdownRemark___frontmatter___tags'
    | 'childMarkdownRemark___frontmatter___path'
    | 'childMarkdownRemark___frontmatter___intro___blurbs'
    | 'childMarkdownRemark___frontmatter___intro___heading'
    | 'childMarkdownRemark___frontmatter___intro___description'
    | 'childMarkdownRemark___frontmatter___testimonials'
    | 'childMarkdownRemark___frontmatter___testimonials___author'
    | 'childMarkdownRemark___frontmatter___testimonials___quote'
    | 'childMarkdownRemark___frontmatter___full_image___sourceInstanceName'
    | 'childMarkdownRemark___frontmatter___full_image___absolutePath'
    | 'childMarkdownRemark___frontmatter___full_image___relativePath'
    | 'childMarkdownRemark___frontmatter___full_image___extension'
    | 'childMarkdownRemark___frontmatter___full_image___size'
    | 'childMarkdownRemark___frontmatter___full_image___prettySize'
    | 'childMarkdownRemark___frontmatter___full_image___modifiedTime'
    | 'childMarkdownRemark___frontmatter___full_image___accessTime'
    | 'childMarkdownRemark___frontmatter___full_image___changeTime'
    | 'childMarkdownRemark___frontmatter___full_image___birthTime'
    | 'childMarkdownRemark___frontmatter___full_image___root'
    | 'childMarkdownRemark___frontmatter___full_image___dir'
    | 'childMarkdownRemark___frontmatter___full_image___base'
    | 'childMarkdownRemark___frontmatter___full_image___ext'
    | 'childMarkdownRemark___frontmatter___full_image___name'
    | 'childMarkdownRemark___frontmatter___full_image___relativeDirectory'
    | 'childMarkdownRemark___frontmatter___full_image___dev'
    | 'childMarkdownRemark___frontmatter___full_image___mode'
    | 'childMarkdownRemark___frontmatter___full_image___nlink'
    | 'childMarkdownRemark___frontmatter___full_image___uid'
    | 'childMarkdownRemark___frontmatter___full_image___gid'
    | 'childMarkdownRemark___frontmatter___full_image___rdev'
    | 'childMarkdownRemark___frontmatter___full_image___ino'
    | 'childMarkdownRemark___frontmatter___full_image___atimeMs'
    | 'childMarkdownRemark___frontmatter___full_image___mtimeMs'
    | 'childMarkdownRemark___frontmatter___full_image___ctimeMs'
    | 'childMarkdownRemark___frontmatter___full_image___atime'
    | 'childMarkdownRemark___frontmatter___full_image___mtime'
    | 'childMarkdownRemark___frontmatter___full_image___ctime'
    | 'childMarkdownRemark___frontmatter___full_image___birthtime'
    | 'childMarkdownRemark___frontmatter___full_image___birthtimeMs'
    | 'childMarkdownRemark___frontmatter___full_image___blksize'
    | 'childMarkdownRemark___frontmatter___full_image___blocks'
    | 'childMarkdownRemark___frontmatter___full_image___publicURL'
    | 'childMarkdownRemark___frontmatter___full_image___id'
    | 'childMarkdownRemark___frontmatter___full_image___children'
    | 'childMarkdownRemark___frontmatter___pricing___heading'
    | 'childMarkdownRemark___frontmatter___pricing___description'
    | 'childMarkdownRemark___frontmatter___pricing___plans'
    | 'childMarkdownRemark___excerpt'
    | 'childMarkdownRemark___rawMarkdownBody'
    | 'childMarkdownRemark___fileAbsolutePath'
    | 'childMarkdownRemark___fields___slug'
    | 'childMarkdownRemark___html'
    | 'childMarkdownRemark___htmlAst'
    | 'childMarkdownRemark___excerptAst'
    | 'childMarkdownRemark___headings'
    | 'childMarkdownRemark___headings___id'
    | 'childMarkdownRemark___headings___value'
    | 'childMarkdownRemark___headings___depth'
    | 'childMarkdownRemark___timeToRead'
    | 'childMarkdownRemark___tableOfContents'
    | 'childMarkdownRemark___wordCount___paragraphs'
    | 'childMarkdownRemark___wordCount___sentences'
    | 'childMarkdownRemark___wordCount___words'
    | 'childMarkdownRemark___parent___id'
    | 'childMarkdownRemark___parent___parent___id'
    | 'childMarkdownRemark___parent___parent___children'
    | 'childMarkdownRemark___parent___children'
    | 'childMarkdownRemark___parent___children___id'
    | 'childMarkdownRemark___parent___children___children'
    | 'childMarkdownRemark___parent___internal___content'
    | 'childMarkdownRemark___parent___internal___contentDigest'
    | 'childMarkdownRemark___parent___internal___description'
    | 'childMarkdownRemark___parent___internal___fieldOwners'
    | 'childMarkdownRemark___parent___internal___ignoreType'
    | 'childMarkdownRemark___parent___internal___mediaType'
    | 'childMarkdownRemark___parent___internal___owner'
    | 'childMarkdownRemark___parent___internal___type'
    | 'childMarkdownRemark___children'
    | 'childMarkdownRemark___children___id'
    | 'childMarkdownRemark___children___parent___id'
    | 'childMarkdownRemark___children___parent___children'
    | 'childMarkdownRemark___children___children'
    | 'childMarkdownRemark___children___children___id'
    | 'childMarkdownRemark___children___children___children'
    | 'childMarkdownRemark___children___internal___content'
    | 'childMarkdownRemark___children___internal___contentDigest'
    | 'childMarkdownRemark___children___internal___description'
    | 'childMarkdownRemark___children___internal___fieldOwners'
    | 'childMarkdownRemark___children___internal___ignoreType'
    | 'childMarkdownRemark___children___internal___mediaType'
    | 'childMarkdownRemark___children___internal___owner'
    | 'childMarkdownRemark___children___internal___type'
    | 'childMarkdownRemark___internal___content'
    | 'childMarkdownRemark___internal___contentDigest'
    | 'childMarkdownRemark___internal___description'
    | 'childMarkdownRemark___internal___fieldOwners'
    | 'childMarkdownRemark___internal___ignoreType'
    | 'childMarkdownRemark___internal___mediaType'
    | 'childMarkdownRemark___internal___owner'
    | 'childMarkdownRemark___internal___type';

export type FileFilterInput = {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    publicURL?: Maybe<StringQueryOperatorInput>;
    childImageSharp?: Maybe<ImageSharpFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type FileGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<FileEdge>;
    nodes: Array<File>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type FileSortInput = {
    fields?: Maybe<Array<Maybe<FileFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type FloatQueryOperatorInput = {
    eq?: Maybe<Scalars['Float']>;
    ne?: Maybe<Scalars['Float']>;
    gt?: Maybe<Scalars['Float']>;
    gte?: Maybe<Scalars['Float']>;
    lt?: Maybe<Scalars['Float']>;
    lte?: Maybe<Scalars['Float']>;
    in?: Maybe<Array<Maybe<Scalars['Float']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Float']>>>;
};

export type ImageCropFocus =
    | 'CENTER'
    | 'NORTH'
    | 'NORTHEAST'
    | 'EAST'
    | 'SOUTHEAST'
    | 'SOUTH'
    | 'SOUTHWEST'
    | 'WEST'
    | 'NORTHWEST'
    | 'ENTROPY'
    | 'ATTENTION';

export type ImageFit = 'COVER' | 'CONTAIN' | 'FILL' | 'INSIDE' | 'OUTSIDE';

export type ImageFormat = 'NO_CHANGE' | 'JPG' | 'PNG' | 'WEBP';

export type ImageSharp = Node & {
    fixed?: Maybe<ImageSharpFixed>;
    /** @deprecated Resolutions was deprecated in Gatsby v2. It's been renamed to "fixed" https://example.com/write-docs-and-fix-this-example-link */
    resolutions?: Maybe<ImageSharpResolutions>;
    fluid?: Maybe<ImageSharpFluid>;
    /** @deprecated Sizes was deprecated in Gatsby v2. It's been renamed to "fluid" https://example.com/write-docs-and-fix-this-example-link */
    sizes?: Maybe<ImageSharpSizes>;
    original?: Maybe<ImageSharpOriginal>;
    resize?: Maybe<ImageSharpResize>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};

export type ImageSharpFixedArgs = {
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    base64Width?: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone?: Maybe<DuotoneGradient>;
    traceSVG?: Maybe<Potrace>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpResolutionsArgs = {
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    base64Width?: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone?: Maybe<DuotoneGradient>;
    traceSVG?: Maybe<Potrace>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpFluidArgs = {
    maxWidth?: Maybe<Scalars['Int']>;
    maxHeight?: Maybe<Scalars['Int']>;
    base64Width?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    duotone?: Maybe<DuotoneGradient>;
    traceSVG?: Maybe<Potrace>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
    sizes?: Maybe<Scalars['String']>;
    srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ImageSharpSizesArgs = {
    maxWidth?: Maybe<Scalars['Int']>;
    maxHeight?: Maybe<Scalars['Int']>;
    base64Width?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    duotone?: Maybe<DuotoneGradient>;
    traceSVG?: Maybe<Potrace>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    toFormat?: Maybe<ImageFormat>;
    toFormatBase64?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
    sizes?: Maybe<Scalars['String']>;
    srcSetBreakpoints?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type ImageSharpResizeArgs = {
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    quality?: Maybe<Scalars['Int']>;
    jpegQuality?: Maybe<Scalars['Int']>;
    pngQuality?: Maybe<Scalars['Int']>;
    webpQuality?: Maybe<Scalars['Int']>;
    jpegProgressive?: Maybe<Scalars['Boolean']>;
    pngCompressionLevel?: Maybe<Scalars['Int']>;
    pngCompressionSpeed?: Maybe<Scalars['Int']>;
    grayscale?: Maybe<Scalars['Boolean']>;
    duotone?: Maybe<DuotoneGradient>;
    base64?: Maybe<Scalars['Boolean']>;
    traceSVG?: Maybe<Potrace>;
    toFormat?: Maybe<ImageFormat>;
    cropFocus?: Maybe<ImageCropFocus>;
    fit?: Maybe<ImageFit>;
    background?: Maybe<Scalars['String']>;
    rotate?: Maybe<Scalars['Int']>;
    trim?: Maybe<Scalars['Float']>;
};

export type ImageSharpConnection = {
    totalCount: Scalars['Int'];
    edges: Array<ImageSharpEdge>;
    nodes: Array<ImageSharp>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<ImageSharpGroupConnection>;
};

export type ImageSharpConnectionDistinctArgs = {
    field: ImageSharpFieldsEnum;
};

export type ImageSharpConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: ImageSharpFieldsEnum;
};

export type ImageSharpEdge = {
    next?: Maybe<ImageSharp>;
    node: ImageSharp;
    previous?: Maybe<ImageSharp>;
};

export type ImageSharpFieldsEnum =
    | 'fixed___base64'
    | 'fixed___tracedSVG'
    | 'fixed___aspectRatio'
    | 'fixed___width'
    | 'fixed___height'
    | 'fixed___src'
    | 'fixed___srcSet'
    | 'fixed___srcWebp'
    | 'fixed___srcSetWebp'
    | 'fixed___originalName'
    | 'resolutions___base64'
    | 'resolutions___tracedSVG'
    | 'resolutions___aspectRatio'
    | 'resolutions___width'
    | 'resolutions___height'
    | 'resolutions___src'
    | 'resolutions___srcSet'
    | 'resolutions___srcWebp'
    | 'resolutions___srcSetWebp'
    | 'resolutions___originalName'
    | 'fluid___base64'
    | 'fluid___tracedSVG'
    | 'fluid___aspectRatio'
    | 'fluid___src'
    | 'fluid___srcSet'
    | 'fluid___srcWebp'
    | 'fluid___srcSetWebp'
    | 'fluid___sizes'
    | 'fluid___originalImg'
    | 'fluid___originalName'
    | 'fluid___presentationWidth'
    | 'fluid___presentationHeight'
    | 'sizes___base64'
    | 'sizes___tracedSVG'
    | 'sizes___aspectRatio'
    | 'sizes___src'
    | 'sizes___srcSet'
    | 'sizes___srcWebp'
    | 'sizes___srcSetWebp'
    | 'sizes___sizes'
    | 'sizes___originalImg'
    | 'sizes___originalName'
    | 'sizes___presentationWidth'
    | 'sizes___presentationHeight'
    | 'original___width'
    | 'original___height'
    | 'original___src'
    | 'resize___src'
    | 'resize___tracedSVG'
    | 'resize___width'
    | 'resize___height'
    | 'resize___aspectRatio'
    | 'resize___originalName'
    | 'id'
    | 'parent___id'
    | 'parent___parent___id'
    | 'parent___parent___parent___id'
    | 'parent___parent___parent___children'
    | 'parent___parent___children'
    | 'parent___parent___children___id'
    | 'parent___parent___children___children'
    | 'parent___parent___internal___content'
    | 'parent___parent___internal___contentDigest'
    | 'parent___parent___internal___description'
    | 'parent___parent___internal___fieldOwners'
    | 'parent___parent___internal___ignoreType'
    | 'parent___parent___internal___mediaType'
    | 'parent___parent___internal___owner'
    | 'parent___parent___internal___type'
    | 'parent___children'
    | 'parent___children___id'
    | 'parent___children___parent___id'
    | 'parent___children___parent___children'
    | 'parent___children___children'
    | 'parent___children___children___id'
    | 'parent___children___children___children'
    | 'parent___children___internal___content'
    | 'parent___children___internal___contentDigest'
    | 'parent___children___internal___description'
    | 'parent___children___internal___fieldOwners'
    | 'parent___children___internal___ignoreType'
    | 'parent___children___internal___mediaType'
    | 'parent___children___internal___owner'
    | 'parent___children___internal___type'
    | 'parent___internal___content'
    | 'parent___internal___contentDigest'
    | 'parent___internal___description'
    | 'parent___internal___fieldOwners'
    | 'parent___internal___ignoreType'
    | 'parent___internal___mediaType'
    | 'parent___internal___owner'
    | 'parent___internal___type'
    | 'children'
    | 'children___id'
    | 'children___parent___id'
    | 'children___parent___parent___id'
    | 'children___parent___parent___children'
    | 'children___parent___children'
    | 'children___parent___children___id'
    | 'children___parent___children___children'
    | 'children___parent___internal___content'
    | 'children___parent___internal___contentDigest'
    | 'children___parent___internal___description'
    | 'children___parent___internal___fieldOwners'
    | 'children___parent___internal___ignoreType'
    | 'children___parent___internal___mediaType'
    | 'children___parent___internal___owner'
    | 'children___parent___internal___type'
    | 'children___children'
    | 'children___children___id'
    | 'children___children___parent___id'
    | 'children___children___parent___children'
    | 'children___children___children'
    | 'children___children___children___id'
    | 'children___children___children___children'
    | 'children___children___internal___content'
    | 'children___children___internal___contentDigest'
    | 'children___children___internal___description'
    | 'children___children___internal___fieldOwners'
    | 'children___children___internal___ignoreType'
    | 'children___children___internal___mediaType'
    | 'children___children___internal___owner'
    | 'children___children___internal___type'
    | 'children___internal___content'
    | 'children___internal___contentDigest'
    | 'children___internal___description'
    | 'children___internal___fieldOwners'
    | 'children___internal___ignoreType'
    | 'children___internal___mediaType'
    | 'children___internal___owner'
    | 'children___internal___type'
    | 'internal___content'
    | 'internal___contentDigest'
    | 'internal___description'
    | 'internal___fieldOwners'
    | 'internal___ignoreType'
    | 'internal___mediaType'
    | 'internal___owner'
    | 'internal___type';

export type ImageSharpFilterInput = {
    fixed?: Maybe<ImageSharpFixedFilterInput>;
    resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
    fluid?: Maybe<ImageSharpFluidFilterInput>;
    sizes?: Maybe<ImageSharpSizesFilterInput>;
    original?: Maybe<ImageSharpOriginalFilterInput>;
    resize?: Maybe<ImageSharpResizeFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type ImageSharpFixed = {
    base64?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    aspectRatio?: Maybe<Scalars['Float']>;
    width: Scalars['Float'];
    height: Scalars['Float'];
    src: Scalars['String'];
    srcSet: Scalars['String'];
    srcWebp?: Maybe<Scalars['String']>;
    srcSetWebp?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpFixedFilterInput = {
    base64?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    width?: Maybe<FloatQueryOperatorInput>;
    height?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    srcWebp?: Maybe<StringQueryOperatorInput>;
    srcSetWebp?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpFluid = {
    base64?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    aspectRatio: Scalars['Float'];
    src: Scalars['String'];
    srcSet: Scalars['String'];
    srcWebp?: Maybe<Scalars['String']>;
    srcSetWebp?: Maybe<Scalars['String']>;
    sizes: Scalars['String'];
    originalImg?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
    presentationWidth: Scalars['Int'];
    presentationHeight: Scalars['Int'];
};

export type ImageSharpFluidFilterInput = {
    base64?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    srcWebp?: Maybe<StringQueryOperatorInput>;
    srcSetWebp?: Maybe<StringQueryOperatorInput>;
    sizes?: Maybe<StringQueryOperatorInput>;
    originalImg?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
    presentationWidth?: Maybe<IntQueryOperatorInput>;
    presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<ImageSharpEdge>;
    nodes: Array<ImageSharp>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginal = {
    width?: Maybe<Scalars['Float']>;
    height?: Maybe<Scalars['Float']>;
    src?: Maybe<Scalars['String']>;
};

export type ImageSharpOriginalFilterInput = {
    width?: Maybe<FloatQueryOperatorInput>;
    height?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResize = {
    src?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    width?: Maybe<Scalars['Int']>;
    height?: Maybe<Scalars['Int']>;
    aspectRatio?: Maybe<Scalars['Float']>;
    originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResizeFilterInput = {
    src?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    width?: Maybe<IntQueryOperatorInput>;
    height?: Maybe<IntQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpResolutions = {
    base64?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    aspectRatio?: Maybe<Scalars['Float']>;
    width: Scalars['Float'];
    height: Scalars['Float'];
    src: Scalars['String'];
    srcSet: Scalars['String'];
    srcWebp?: Maybe<Scalars['String']>;
    srcSetWebp?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
};

export type ImageSharpResolutionsFilterInput = {
    base64?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    width?: Maybe<FloatQueryOperatorInput>;
    height?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    srcWebp?: Maybe<StringQueryOperatorInput>;
    srcSetWebp?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
};

export type ImageSharpSizes = {
    base64?: Maybe<Scalars['String']>;
    tracedSVG?: Maybe<Scalars['String']>;
    aspectRatio: Scalars['Float'];
    src: Scalars['String'];
    srcSet: Scalars['String'];
    srcWebp?: Maybe<Scalars['String']>;
    srcSetWebp?: Maybe<Scalars['String']>;
    sizes: Scalars['String'];
    originalImg?: Maybe<Scalars['String']>;
    originalName?: Maybe<Scalars['String']>;
    presentationWidth: Scalars['Int'];
    presentationHeight: Scalars['Int'];
};

export type ImageSharpSizesFilterInput = {
    base64?: Maybe<StringQueryOperatorInput>;
    tracedSVG?: Maybe<StringQueryOperatorInput>;
    aspectRatio?: Maybe<FloatQueryOperatorInput>;
    src?: Maybe<StringQueryOperatorInput>;
    srcSet?: Maybe<StringQueryOperatorInput>;
    srcWebp?: Maybe<StringQueryOperatorInput>;
    srcSetWebp?: Maybe<StringQueryOperatorInput>;
    sizes?: Maybe<StringQueryOperatorInput>;
    originalImg?: Maybe<StringQueryOperatorInput>;
    originalName?: Maybe<StringQueryOperatorInput>;
    presentationWidth?: Maybe<IntQueryOperatorInput>;
    presentationHeight?: Maybe<IntQueryOperatorInput>;
};

export type ImageSharpSortInput = {
    fields?: Maybe<Array<Maybe<ImageSharpFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type Internal = {
    content?: Maybe<Scalars['String']>;
    contentDigest: Scalars['String'];
    description?: Maybe<Scalars['String']>;
    fieldOwners?: Maybe<Array<Maybe<Scalars['String']>>>;
    ignoreType?: Maybe<Scalars['Boolean']>;
    mediaType?: Maybe<Scalars['String']>;
    owner: Scalars['String'];
    type: Scalars['String'];
};

export type InternalFilterInput = {
    content?: Maybe<StringQueryOperatorInput>;
    contentDigest?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    fieldOwners?: Maybe<StringQueryOperatorInput>;
    ignoreType?: Maybe<BooleanQueryOperatorInput>;
    mediaType?: Maybe<StringQueryOperatorInput>;
    owner?: Maybe<StringQueryOperatorInput>;
    type?: Maybe<StringQueryOperatorInput>;
};

export type IntQueryOperatorInput = {
    eq?: Maybe<Scalars['Int']>;
    ne?: Maybe<Scalars['Int']>;
    gt?: Maybe<Scalars['Int']>;
    gte?: Maybe<Scalars['Int']>;
    lt?: Maybe<Scalars['Int']>;
    lte?: Maybe<Scalars['Int']>;
    in?: Maybe<Array<Maybe<Scalars['Int']>>>;
    nin?: Maybe<Array<Maybe<Scalars['Int']>>>;
};

export type JsonQueryOperatorInput = {
    eq?: Maybe<Scalars['JSON']>;
    ne?: Maybe<Scalars['JSON']>;
    in?: Maybe<Array<Maybe<Scalars['JSON']>>>;
    nin?: Maybe<Array<Maybe<Scalars['JSON']>>>;
    regex?: Maybe<Scalars['JSON']>;
    glob?: Maybe<Scalars['JSON']>;
};

export type MarkdownExcerptFormats = 'PLAIN' | 'HTML' | 'MARKDOWN';

export type MarkdownHeading = {
    id?: Maybe<Scalars['String']>;
    value?: Maybe<Scalars['String']>;
    depth?: Maybe<Scalars['Int']>;
};

export type MarkdownHeadingFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    value?: Maybe<StringQueryOperatorInput>;
    depth?: Maybe<IntQueryOperatorInput>;
};

export type MarkdownHeadingFilterListInput = {
    elemMatch?: Maybe<MarkdownHeadingFilterInput>;
};

export type MarkdownHeadingLevels = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';

export type MarkdownRemark = Node & {
    id: Scalars['ID'];
    frontmatter?: Maybe<MarkdownRemarkFrontmatter>;
    excerpt?: Maybe<Scalars['String']>;
    rawMarkdownBody?: Maybe<Scalars['String']>;
    fileAbsolutePath?: Maybe<Scalars['String']>;
    fields?: Maybe<MarkdownRemarkFields>;
    html?: Maybe<Scalars['String']>;
    htmlAst?: Maybe<Scalars['JSON']>;
    excerptAst?: Maybe<Scalars['JSON']>;
    headings?: Maybe<Array<Maybe<MarkdownHeading>>>;
    timeToRead?: Maybe<Scalars['Int']>;
    tableOfContents?: Maybe<Scalars['String']>;
    wordCount?: Maybe<MarkdownWordCount>;
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};

export type MarkdownRemarkExcerptArgs = {
    pruneLength?: Maybe<Scalars['Int']>;
    truncate?: Maybe<Scalars['Boolean']>;
    format?: Maybe<MarkdownExcerptFormats>;
};

export type MarkdownRemarkExcerptAstArgs = {
    pruneLength?: Maybe<Scalars['Int']>;
    truncate?: Maybe<Scalars['Boolean']>;
};

export type MarkdownRemarkHeadingsArgs = {
    depth?: Maybe<MarkdownHeadingLevels>;
};

export type MarkdownRemarkTableOfContentsArgs = {
    absolute?: Maybe<Scalars['Boolean']>;
    pathToSlugField?: Maybe<Scalars['String']>;
    maxDepth?: Maybe<Scalars['Int']>;
    heading?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkConnection = {
    totalCount: Scalars['Int'];
    edges: Array<MarkdownRemarkEdge>;
    nodes: Array<MarkdownRemark>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<MarkdownRemarkGroupConnection>;
};

export type MarkdownRemarkConnectionDistinctArgs = {
    field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: MarkdownRemarkFieldsEnum;
};

export type MarkdownRemarkEdge = {
    next?: Maybe<MarkdownRemark>;
    node: MarkdownRemark;
    previous?: Maybe<MarkdownRemark>;
};

export type MarkdownRemarkFields = {
    slug?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFieldsEnum =
    | 'id'
    | 'frontmatter___title'
    | 'frontmatter___templateKey'
    | 'frontmatter___image___sourceInstanceName'
    | 'frontmatter___image___absolutePath'
    | 'frontmatter___image___relativePath'
    | 'frontmatter___image___extension'
    | 'frontmatter___image___size'
    | 'frontmatter___image___prettySize'
    | 'frontmatter___image___modifiedTime'
    | 'frontmatter___image___accessTime'
    | 'frontmatter___image___changeTime'
    | 'frontmatter___image___birthTime'
    | 'frontmatter___image___root'
    | 'frontmatter___image___dir'
    | 'frontmatter___image___base'
    | 'frontmatter___image___ext'
    | 'frontmatter___image___name'
    | 'frontmatter___image___relativeDirectory'
    | 'frontmatter___image___dev'
    | 'frontmatter___image___mode'
    | 'frontmatter___image___nlink'
    | 'frontmatter___image___uid'
    | 'frontmatter___image___gid'
    | 'frontmatter___image___rdev'
    | 'frontmatter___image___ino'
    | 'frontmatter___image___atimeMs'
    | 'frontmatter___image___mtimeMs'
    | 'frontmatter___image___ctimeMs'
    | 'frontmatter___image___atime'
    | 'frontmatter___image___mtime'
    | 'frontmatter___image___ctime'
    | 'frontmatter___image___birthtime'
    | 'frontmatter___image___birthtimeMs'
    | 'frontmatter___image___blksize'
    | 'frontmatter___image___blocks'
    | 'frontmatter___image___publicURL'
    | 'frontmatter___image___childImageSharp___id'
    | 'frontmatter___image___childImageSharp___children'
    | 'frontmatter___image___id'
    | 'frontmatter___image___parent___id'
    | 'frontmatter___image___parent___children'
    | 'frontmatter___image___children'
    | 'frontmatter___image___children___id'
    | 'frontmatter___image___children___children'
    | 'frontmatter___image___internal___content'
    | 'frontmatter___image___internal___contentDigest'
    | 'frontmatter___image___internal___description'
    | 'frontmatter___image___internal___fieldOwners'
    | 'frontmatter___image___internal___ignoreType'
    | 'frontmatter___image___internal___mediaType'
    | 'frontmatter___image___internal___owner'
    | 'frontmatter___image___internal___type'
    | 'frontmatter___image___childMarkdownRemark___id'
    | 'frontmatter___image___childMarkdownRemark___excerpt'
    | 'frontmatter___image___childMarkdownRemark___rawMarkdownBody'
    | 'frontmatter___image___childMarkdownRemark___fileAbsolutePath'
    | 'frontmatter___image___childMarkdownRemark___html'
    | 'frontmatter___image___childMarkdownRemark___htmlAst'
    | 'frontmatter___image___childMarkdownRemark___excerptAst'
    | 'frontmatter___image___childMarkdownRemark___headings'
    | 'frontmatter___image___childMarkdownRemark___timeToRead'
    | 'frontmatter___image___childMarkdownRemark___tableOfContents'
    | 'frontmatter___image___childMarkdownRemark___children'
    | 'frontmatter___cover___sourceInstanceName'
    | 'frontmatter___cover___absolutePath'
    | 'frontmatter___cover___relativePath'
    | 'frontmatter___cover___extension'
    | 'frontmatter___cover___size'
    | 'frontmatter___cover___prettySize'
    | 'frontmatter___cover___modifiedTime'
    | 'frontmatter___cover___accessTime'
    | 'frontmatter___cover___changeTime'
    | 'frontmatter___cover___birthTime'
    | 'frontmatter___cover___root'
    | 'frontmatter___cover___dir'
    | 'frontmatter___cover___base'
    | 'frontmatter___cover___ext'
    | 'frontmatter___cover___name'
    | 'frontmatter___cover___relativeDirectory'
    | 'frontmatter___cover___dev'
    | 'frontmatter___cover___mode'
    | 'frontmatter___cover___nlink'
    | 'frontmatter___cover___uid'
    | 'frontmatter___cover___gid'
    | 'frontmatter___cover___rdev'
    | 'frontmatter___cover___ino'
    | 'frontmatter___cover___atimeMs'
    | 'frontmatter___cover___mtimeMs'
    | 'frontmatter___cover___ctimeMs'
    | 'frontmatter___cover___atime'
    | 'frontmatter___cover___mtime'
    | 'frontmatter___cover___ctime'
    | 'frontmatter___cover___birthtime'
    | 'frontmatter___cover___birthtimeMs'
    | 'frontmatter___cover___blksize'
    | 'frontmatter___cover___blocks'
    | 'frontmatter___cover___publicURL'
    | 'frontmatter___cover___childImageSharp___id'
    | 'frontmatter___cover___childImageSharp___children'
    | 'frontmatter___cover___id'
    | 'frontmatter___cover___parent___id'
    | 'frontmatter___cover___parent___children'
    | 'frontmatter___cover___children'
    | 'frontmatter___cover___children___id'
    | 'frontmatter___cover___children___children'
    | 'frontmatter___cover___internal___content'
    | 'frontmatter___cover___internal___contentDigest'
    | 'frontmatter___cover___internal___description'
    | 'frontmatter___cover___internal___fieldOwners'
    | 'frontmatter___cover___internal___ignoreType'
    | 'frontmatter___cover___internal___mediaType'
    | 'frontmatter___cover___internal___owner'
    | 'frontmatter___cover___internal___type'
    | 'frontmatter___cover___childMarkdownRemark___id'
    | 'frontmatter___cover___childMarkdownRemark___excerpt'
    | 'frontmatter___cover___childMarkdownRemark___rawMarkdownBody'
    | 'frontmatter___cover___childMarkdownRemark___fileAbsolutePath'
    | 'frontmatter___cover___childMarkdownRemark___html'
    | 'frontmatter___cover___childMarkdownRemark___htmlAst'
    | 'frontmatter___cover___childMarkdownRemark___excerptAst'
    | 'frontmatter___cover___childMarkdownRemark___headings'
    | 'frontmatter___cover___childMarkdownRemark___timeToRead'
    | 'frontmatter___cover___childMarkdownRemark___tableOfContents'
    | 'frontmatter___cover___childMarkdownRemark___children'
    | 'frontmatter___heading'
    | 'frontmatter___subheading'
    | 'frontmatter___editorNote___title'
    | 'frontmatter___editorNote___description'
    | 'frontmatter___advice___left___sourceInstanceName'
    | 'frontmatter___advice___left___absolutePath'
    | 'frontmatter___advice___left___relativePath'
    | 'frontmatter___advice___left___extension'
    | 'frontmatter___advice___left___size'
    | 'frontmatter___advice___left___prettySize'
    | 'frontmatter___advice___left___modifiedTime'
    | 'frontmatter___advice___left___accessTime'
    | 'frontmatter___advice___left___changeTime'
    | 'frontmatter___advice___left___birthTime'
    | 'frontmatter___advice___left___root'
    | 'frontmatter___advice___left___dir'
    | 'frontmatter___advice___left___base'
    | 'frontmatter___advice___left___ext'
    | 'frontmatter___advice___left___name'
    | 'frontmatter___advice___left___relativeDirectory'
    | 'frontmatter___advice___left___dev'
    | 'frontmatter___advice___left___mode'
    | 'frontmatter___advice___left___nlink'
    | 'frontmatter___advice___left___uid'
    | 'frontmatter___advice___left___gid'
    | 'frontmatter___advice___left___rdev'
    | 'frontmatter___advice___left___ino'
    | 'frontmatter___advice___left___atimeMs'
    | 'frontmatter___advice___left___mtimeMs'
    | 'frontmatter___advice___left___ctimeMs'
    | 'frontmatter___advice___left___atime'
    | 'frontmatter___advice___left___mtime'
    | 'frontmatter___advice___left___ctime'
    | 'frontmatter___advice___left___birthtime'
    | 'frontmatter___advice___left___birthtimeMs'
    | 'frontmatter___advice___left___blksize'
    | 'frontmatter___advice___left___blocks'
    | 'frontmatter___advice___left___publicURL'
    | 'frontmatter___advice___left___id'
    | 'frontmatter___advice___left___children'
    | 'frontmatter___advice___right___sourceInstanceName'
    | 'frontmatter___advice___right___absolutePath'
    | 'frontmatter___advice___right___relativePath'
    | 'frontmatter___advice___right___extension'
    | 'frontmatter___advice___right___size'
    | 'frontmatter___advice___right___prettySize'
    | 'frontmatter___advice___right___modifiedTime'
    | 'frontmatter___advice___right___accessTime'
    | 'frontmatter___advice___right___changeTime'
    | 'frontmatter___advice___right___birthTime'
    | 'frontmatter___advice___right___root'
    | 'frontmatter___advice___right___dir'
    | 'frontmatter___advice___right___base'
    | 'frontmatter___advice___right___ext'
    | 'frontmatter___advice___right___name'
    | 'frontmatter___advice___right___relativeDirectory'
    | 'frontmatter___advice___right___dev'
    | 'frontmatter___advice___right___mode'
    | 'frontmatter___advice___right___nlink'
    | 'frontmatter___advice___right___uid'
    | 'frontmatter___advice___right___gid'
    | 'frontmatter___advice___right___rdev'
    | 'frontmatter___advice___right___ino'
    | 'frontmatter___advice___right___atimeMs'
    | 'frontmatter___advice___right___mtimeMs'
    | 'frontmatter___advice___right___ctimeMs'
    | 'frontmatter___advice___right___atime'
    | 'frontmatter___advice___right___mtime'
    | 'frontmatter___advice___right___ctime'
    | 'frontmatter___advice___right___birthtime'
    | 'frontmatter___advice___right___birthtimeMs'
    | 'frontmatter___advice___right___blksize'
    | 'frontmatter___advice___right___blocks'
    | 'frontmatter___advice___right___publicURL'
    | 'frontmatter___advice___right___id'
    | 'frontmatter___advice___right___children'
    | 'frontmatter___articles___blurbs'
    | 'frontmatter___articles___blurbs___text'
    | 'frontmatter___articles___heading'
    | 'frontmatter___articles___description'
    | 'frontmatter___doodles'
    | 'frontmatter___doodles___image___sourceInstanceName'
    | 'frontmatter___doodles___image___absolutePath'
    | 'frontmatter___doodles___image___relativePath'
    | 'frontmatter___doodles___image___extension'
    | 'frontmatter___doodles___image___size'
    | 'frontmatter___doodles___image___prettySize'
    | 'frontmatter___doodles___image___modifiedTime'
    | 'frontmatter___doodles___image___accessTime'
    | 'frontmatter___doodles___image___changeTime'
    | 'frontmatter___doodles___image___birthTime'
    | 'frontmatter___doodles___image___root'
    | 'frontmatter___doodles___image___dir'
    | 'frontmatter___doodles___image___base'
    | 'frontmatter___doodles___image___ext'
    | 'frontmatter___doodles___image___name'
    | 'frontmatter___doodles___image___relativeDirectory'
    | 'frontmatter___doodles___image___dev'
    | 'frontmatter___doodles___image___mode'
    | 'frontmatter___doodles___image___nlink'
    | 'frontmatter___doodles___image___uid'
    | 'frontmatter___doodles___image___gid'
    | 'frontmatter___doodles___image___rdev'
    | 'frontmatter___doodles___image___ino'
    | 'frontmatter___doodles___image___atimeMs'
    | 'frontmatter___doodles___image___mtimeMs'
    | 'frontmatter___doodles___image___ctimeMs'
    | 'frontmatter___doodles___image___atime'
    | 'frontmatter___doodles___image___mtime'
    | 'frontmatter___doodles___image___ctime'
    | 'frontmatter___doodles___image___birthtime'
    | 'frontmatter___doodles___image___birthtimeMs'
    | 'frontmatter___doodles___image___blksize'
    | 'frontmatter___doodles___image___blocks'
    | 'frontmatter___doodles___image___publicURL'
    | 'frontmatter___doodles___image___id'
    | 'frontmatter___doodles___image___children'
    | 'frontmatter___main___heading'
    | 'frontmatter___main___description'
    | 'frontmatter___main___image1___alt'
    | 'frontmatter___main___image2___alt'
    | 'frontmatter___main___image3___alt'
    | 'frontmatter___date'
    | 'frontmatter___featuredpost'
    | 'frontmatter___featuredimage___sourceInstanceName'
    | 'frontmatter___featuredimage___absolutePath'
    | 'frontmatter___featuredimage___relativePath'
    | 'frontmatter___featuredimage___extension'
    | 'frontmatter___featuredimage___size'
    | 'frontmatter___featuredimage___prettySize'
    | 'frontmatter___featuredimage___modifiedTime'
    | 'frontmatter___featuredimage___accessTime'
    | 'frontmatter___featuredimage___changeTime'
    | 'frontmatter___featuredimage___birthTime'
    | 'frontmatter___featuredimage___root'
    | 'frontmatter___featuredimage___dir'
    | 'frontmatter___featuredimage___base'
    | 'frontmatter___featuredimage___ext'
    | 'frontmatter___featuredimage___name'
    | 'frontmatter___featuredimage___relativeDirectory'
    | 'frontmatter___featuredimage___dev'
    | 'frontmatter___featuredimage___mode'
    | 'frontmatter___featuredimage___nlink'
    | 'frontmatter___featuredimage___uid'
    | 'frontmatter___featuredimage___gid'
    | 'frontmatter___featuredimage___rdev'
    | 'frontmatter___featuredimage___ino'
    | 'frontmatter___featuredimage___atimeMs'
    | 'frontmatter___featuredimage___mtimeMs'
    | 'frontmatter___featuredimage___ctimeMs'
    | 'frontmatter___featuredimage___atime'
    | 'frontmatter___featuredimage___mtime'
    | 'frontmatter___featuredimage___ctime'
    | 'frontmatter___featuredimage___birthtime'
    | 'frontmatter___featuredimage___birthtimeMs'
    | 'frontmatter___featuredimage___blksize'
    | 'frontmatter___featuredimage___blocks'
    | 'frontmatter___featuredimage___publicURL'
    | 'frontmatter___featuredimage___childImageSharp___id'
    | 'frontmatter___featuredimage___childImageSharp___children'
    | 'frontmatter___featuredimage___id'
    | 'frontmatter___featuredimage___parent___id'
    | 'frontmatter___featuredimage___parent___children'
    | 'frontmatter___featuredimage___children'
    | 'frontmatter___featuredimage___children___id'
    | 'frontmatter___featuredimage___children___children'
    | 'frontmatter___featuredimage___internal___content'
    | 'frontmatter___featuredimage___internal___contentDigest'
    | 'frontmatter___featuredimage___internal___description'
    | 'frontmatter___featuredimage___internal___fieldOwners'
    | 'frontmatter___featuredimage___internal___ignoreType'
    | 'frontmatter___featuredimage___internal___mediaType'
    | 'frontmatter___featuredimage___internal___owner'
    | 'frontmatter___featuredimage___internal___type'
    | 'frontmatter___featuredimage___childMarkdownRemark___id'
    | 'frontmatter___featuredimage___childMarkdownRemark___excerpt'
    | 'frontmatter___featuredimage___childMarkdownRemark___rawMarkdownBody'
    | 'frontmatter___featuredimage___childMarkdownRemark___fileAbsolutePath'
    | 'frontmatter___featuredimage___childMarkdownRemark___html'
    | 'frontmatter___featuredimage___childMarkdownRemark___htmlAst'
    | 'frontmatter___featuredimage___childMarkdownRemark___excerptAst'
    | 'frontmatter___featuredimage___childMarkdownRemark___headings'
    | 'frontmatter___featuredimage___childMarkdownRemark___timeToRead'
    | 'frontmatter___featuredimage___childMarkdownRemark___tableOfContents'
    | 'frontmatter___featuredimage___childMarkdownRemark___children'
    | 'frontmatter___description'
    | 'frontmatter___tags'
    | 'frontmatter___path'
    | 'frontmatter___intro___blurbs'
    | 'frontmatter___intro___blurbs___text'
    | 'frontmatter___intro___heading'
    | 'frontmatter___intro___description'
    | 'frontmatter___testimonials'
    | 'frontmatter___testimonials___author'
    | 'frontmatter___testimonials___quote'
    | 'frontmatter___full_image___sourceInstanceName'
    | 'frontmatter___full_image___absolutePath'
    | 'frontmatter___full_image___relativePath'
    | 'frontmatter___full_image___extension'
    | 'frontmatter___full_image___size'
    | 'frontmatter___full_image___prettySize'
    | 'frontmatter___full_image___modifiedTime'
    | 'frontmatter___full_image___accessTime'
    | 'frontmatter___full_image___changeTime'
    | 'frontmatter___full_image___birthTime'
    | 'frontmatter___full_image___root'
    | 'frontmatter___full_image___dir'
    | 'frontmatter___full_image___base'
    | 'frontmatter___full_image___ext'
    | 'frontmatter___full_image___name'
    | 'frontmatter___full_image___relativeDirectory'
    | 'frontmatter___full_image___dev'
    | 'frontmatter___full_image___mode'
    | 'frontmatter___full_image___nlink'
    | 'frontmatter___full_image___uid'
    | 'frontmatter___full_image___gid'
    | 'frontmatter___full_image___rdev'
    | 'frontmatter___full_image___ino'
    | 'frontmatter___full_image___atimeMs'
    | 'frontmatter___full_image___mtimeMs'
    | 'frontmatter___full_image___ctimeMs'
    | 'frontmatter___full_image___atime'
    | 'frontmatter___full_image___mtime'
    | 'frontmatter___full_image___ctime'
    | 'frontmatter___full_image___birthtime'
    | 'frontmatter___full_image___birthtimeMs'
    | 'frontmatter___full_image___blksize'
    | 'frontmatter___full_image___blocks'
    | 'frontmatter___full_image___publicURL'
    | 'frontmatter___full_image___childImageSharp___id'
    | 'frontmatter___full_image___childImageSharp___children'
    | 'frontmatter___full_image___id'
    | 'frontmatter___full_image___parent___id'
    | 'frontmatter___full_image___parent___children'
    | 'frontmatter___full_image___children'
    | 'frontmatter___full_image___children___id'
    | 'frontmatter___full_image___children___children'
    | 'frontmatter___full_image___internal___content'
    | 'frontmatter___full_image___internal___contentDigest'
    | 'frontmatter___full_image___internal___description'
    | 'frontmatter___full_image___internal___fieldOwners'
    | 'frontmatter___full_image___internal___ignoreType'
    | 'frontmatter___full_image___internal___mediaType'
    | 'frontmatter___full_image___internal___owner'
    | 'frontmatter___full_image___internal___type'
    | 'frontmatter___full_image___childMarkdownRemark___id'
    | 'frontmatter___full_image___childMarkdownRemark___excerpt'
    | 'frontmatter___full_image___childMarkdownRemark___rawMarkdownBody'
    | 'frontmatter___full_image___childMarkdownRemark___fileAbsolutePath'
    | 'frontmatter___full_image___childMarkdownRemark___html'
    | 'frontmatter___full_image___childMarkdownRemark___htmlAst'
    | 'frontmatter___full_image___childMarkdownRemark___excerptAst'
    | 'frontmatter___full_image___childMarkdownRemark___headings'
    | 'frontmatter___full_image___childMarkdownRemark___timeToRead'
    | 'frontmatter___full_image___childMarkdownRemark___tableOfContents'
    | 'frontmatter___full_image___childMarkdownRemark___children'
    | 'frontmatter___pricing___heading'
    | 'frontmatter___pricing___description'
    | 'frontmatter___pricing___plans'
    | 'frontmatter___pricing___plans___description'
    | 'frontmatter___pricing___plans___items'
    | 'frontmatter___pricing___plans___plan'
    | 'frontmatter___pricing___plans___price'
    | 'excerpt'
    | 'rawMarkdownBody'
    | 'fileAbsolutePath'
    | 'fields___slug'
    | 'html'
    | 'htmlAst'
    | 'excerptAst'
    | 'headings'
    | 'headings___id'
    | 'headings___value'
    | 'headings___depth'
    | 'timeToRead'
    | 'tableOfContents'
    | 'wordCount___paragraphs'
    | 'wordCount___sentences'
    | 'wordCount___words'
    | 'parent___id'
    | 'parent___parent___id'
    | 'parent___parent___parent___id'
    | 'parent___parent___parent___children'
    | 'parent___parent___children'
    | 'parent___parent___children___id'
    | 'parent___parent___children___children'
    | 'parent___parent___internal___content'
    | 'parent___parent___internal___contentDigest'
    | 'parent___parent___internal___description'
    | 'parent___parent___internal___fieldOwners'
    | 'parent___parent___internal___ignoreType'
    | 'parent___parent___internal___mediaType'
    | 'parent___parent___internal___owner'
    | 'parent___parent___internal___type'
    | 'parent___children'
    | 'parent___children___id'
    | 'parent___children___parent___id'
    | 'parent___children___parent___children'
    | 'parent___children___children'
    | 'parent___children___children___id'
    | 'parent___children___children___children'
    | 'parent___children___internal___content'
    | 'parent___children___internal___contentDigest'
    | 'parent___children___internal___description'
    | 'parent___children___internal___fieldOwners'
    | 'parent___children___internal___ignoreType'
    | 'parent___children___internal___mediaType'
    | 'parent___children___internal___owner'
    | 'parent___children___internal___type'
    | 'parent___internal___content'
    | 'parent___internal___contentDigest'
    | 'parent___internal___description'
    | 'parent___internal___fieldOwners'
    | 'parent___internal___ignoreType'
    | 'parent___internal___mediaType'
    | 'parent___internal___owner'
    | 'parent___internal___type'
    | 'children'
    | 'children___id'
    | 'children___parent___id'
    | 'children___parent___parent___id'
    | 'children___parent___parent___children'
    | 'children___parent___children'
    | 'children___parent___children___id'
    | 'children___parent___children___children'
    | 'children___parent___internal___content'
    | 'children___parent___internal___contentDigest'
    | 'children___parent___internal___description'
    | 'children___parent___internal___fieldOwners'
    | 'children___parent___internal___ignoreType'
    | 'children___parent___internal___mediaType'
    | 'children___parent___internal___owner'
    | 'children___parent___internal___type'
    | 'children___children'
    | 'children___children___id'
    | 'children___children___parent___id'
    | 'children___children___parent___children'
    | 'children___children___children'
    | 'children___children___children___id'
    | 'children___children___children___children'
    | 'children___children___internal___content'
    | 'children___children___internal___contentDigest'
    | 'children___children___internal___description'
    | 'children___children___internal___fieldOwners'
    | 'children___children___internal___ignoreType'
    | 'children___children___internal___mediaType'
    | 'children___children___internal___owner'
    | 'children___children___internal___type'
    | 'children___internal___content'
    | 'children___internal___contentDigest'
    | 'children___internal___description'
    | 'children___internal___fieldOwners'
    | 'children___internal___ignoreType'
    | 'children___internal___mediaType'
    | 'children___internal___owner'
    | 'children___internal___type'
    | 'internal___content'
    | 'internal___contentDigest'
    | 'internal___description'
    | 'internal___fieldOwners'
    | 'internal___ignoreType'
    | 'internal___mediaType'
    | 'internal___owner'
    | 'internal___type';

export type MarkdownRemarkFieldsFilterInput = {
    slug?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
    fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
    fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
    html?: Maybe<StringQueryOperatorInput>;
    htmlAst?: Maybe<JsonQueryOperatorInput>;
    excerptAst?: Maybe<JsonQueryOperatorInput>;
    headings?: Maybe<MarkdownHeadingFilterListInput>;
    timeToRead?: Maybe<IntQueryOperatorInput>;
    tableOfContents?: Maybe<StringQueryOperatorInput>;
    wordCount?: Maybe<MarkdownWordCountFilterInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type MarkdownRemarkFrontmatter = {
    title?: Maybe<Scalars['String']>;
    templateKey?: Maybe<Scalars['String']>;
    image?: Maybe<File>;
    cover?: Maybe<File>;
    heading?: Maybe<Scalars['String']>;
    subheading?: Maybe<Scalars['String']>;
    editorNote?: Maybe<MarkdownRemarkFrontmatterEditorNote>;
    advice?: Maybe<MarkdownRemarkFrontmatterAdvice>;
    articles?: Maybe<MarkdownRemarkFrontmatterArticles>;
    doodles?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterDoodles>>>;
    main?: Maybe<MarkdownRemarkFrontmatterMain>;
    date?: Maybe<Scalars['Date']>;
    featuredpost?: Maybe<Scalars['Boolean']>;
    featuredimage?: Maybe<File>;
    description?: Maybe<Scalars['String']>;
    tags?: Maybe<Array<Maybe<Scalars['String']>>>;
    path?: Maybe<Scalars['String']>;
    intro?: Maybe<MarkdownRemarkFrontmatterIntro>;
    testimonials?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterTestimonials>>>;
    full_image?: Maybe<File>;
    pricing?: Maybe<MarkdownRemarkFrontmatterPricing>;
};

export type MarkdownRemarkFrontmatterDateArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterAdvice = {
    left?: Maybe<File>;
    right?: Maybe<File>;
};

export type MarkdownRemarkFrontmatterAdviceFilterInput = {
    left?: Maybe<FileFilterInput>;
    right?: Maybe<FileFilterInput>;
};

export type MarkdownRemarkFrontmatterArticles = {
    blurbs?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterArticlesBlurbs>>>;
    heading?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterArticlesBlurbs = {
    image?: Maybe<File>;
    text?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterArticlesBlurbsFilterInput = {
    image?: Maybe<FileFilterInput>;
    text?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterArticlesBlurbsFilterListInput = {
    elemMatch?: Maybe<MarkdownRemarkFrontmatterArticlesBlurbsFilterInput>;
};

export type MarkdownRemarkFrontmatterArticlesFilterInput = {
    blurbs?: Maybe<MarkdownRemarkFrontmatterArticlesBlurbsFilterListInput>;
    heading?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterDoodles = {
    image?: Maybe<File>;
};

export type MarkdownRemarkFrontmatterDoodlesFilterInput = {
    image?: Maybe<FileFilterInput>;
};

export type MarkdownRemarkFrontmatterDoodlesFilterListInput = {
    elemMatch?: Maybe<MarkdownRemarkFrontmatterDoodlesFilterInput>;
};

export type MarkdownRemarkFrontmatterEditorNote = {
    title?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterEditorNoteFilterInput = {
    title?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterFilterInput = {
    title?: Maybe<StringQueryOperatorInput>;
    templateKey?: Maybe<StringQueryOperatorInput>;
    image?: Maybe<FileFilterInput>;
    cover?: Maybe<FileFilterInput>;
    heading?: Maybe<StringQueryOperatorInput>;
    subheading?: Maybe<StringQueryOperatorInput>;
    editorNote?: Maybe<MarkdownRemarkFrontmatterEditorNoteFilterInput>;
    advice?: Maybe<MarkdownRemarkFrontmatterAdviceFilterInput>;
    articles?: Maybe<MarkdownRemarkFrontmatterArticlesFilterInput>;
    doodles?: Maybe<MarkdownRemarkFrontmatterDoodlesFilterListInput>;
    main?: Maybe<MarkdownRemarkFrontmatterMainFilterInput>;
    date?: Maybe<DateQueryOperatorInput>;
    featuredpost?: Maybe<BooleanQueryOperatorInput>;
    featuredimage?: Maybe<FileFilterInput>;
    description?: Maybe<StringQueryOperatorInput>;
    tags?: Maybe<StringQueryOperatorInput>;
    path?: Maybe<StringQueryOperatorInput>;
    intro?: Maybe<MarkdownRemarkFrontmatterIntroFilterInput>;
    testimonials?: Maybe<MarkdownRemarkFrontmatterTestimonialsFilterListInput>;
    full_image?: Maybe<FileFilterInput>;
    pricing?: Maybe<MarkdownRemarkFrontmatterPricingFilterInput>;
};

export type MarkdownRemarkFrontmatterIntro = {
    blurbs?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterIntroBlurbs>>>;
    heading?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterIntroBlurbs = {
    image?: Maybe<File>;
    text?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterIntroBlurbsFilterInput = {
    image?: Maybe<FileFilterInput>;
    text?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterIntroBlurbsFilterListInput = {
    elemMatch?: Maybe<MarkdownRemarkFrontmatterIntroBlurbsFilterInput>;
};

export type MarkdownRemarkFrontmatterIntroFilterInput = {
    blurbs?: Maybe<MarkdownRemarkFrontmatterIntroBlurbsFilterListInput>;
    heading?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterMain = {
    heading?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    image1?: Maybe<MarkdownRemarkFrontmatterMainImage1>;
    image2?: Maybe<MarkdownRemarkFrontmatterMainImage2>;
    image3?: Maybe<MarkdownRemarkFrontmatterMainImage3>;
};

export type MarkdownRemarkFrontmatterMainFilterInput = {
    heading?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    image1?: Maybe<MarkdownRemarkFrontmatterMainImage1FilterInput>;
    image2?: Maybe<MarkdownRemarkFrontmatterMainImage2FilterInput>;
    image3?: Maybe<MarkdownRemarkFrontmatterMainImage3FilterInput>;
};

export type MarkdownRemarkFrontmatterMainImage1 = {
    alt?: Maybe<Scalars['String']>;
    image?: Maybe<File>;
};

export type MarkdownRemarkFrontmatterMainImage1FilterInput = {
    alt?: Maybe<StringQueryOperatorInput>;
    image?: Maybe<FileFilterInput>;
};

export type MarkdownRemarkFrontmatterMainImage2 = {
    alt?: Maybe<Scalars['String']>;
    image?: Maybe<File>;
};

export type MarkdownRemarkFrontmatterMainImage2FilterInput = {
    alt?: Maybe<StringQueryOperatorInput>;
    image?: Maybe<FileFilterInput>;
};

export type MarkdownRemarkFrontmatterMainImage3 = {
    alt?: Maybe<Scalars['String']>;
    image?: Maybe<File>;
};

export type MarkdownRemarkFrontmatterMainImage3FilterInput = {
    alt?: Maybe<StringQueryOperatorInput>;
    image?: Maybe<FileFilterInput>;
};

export type MarkdownRemarkFrontmatterPricing = {
    heading?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    plans?: Maybe<Array<Maybe<MarkdownRemarkFrontmatterPricingPlans>>>;
};

export type MarkdownRemarkFrontmatterPricingFilterInput = {
    heading?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    plans?: Maybe<MarkdownRemarkFrontmatterPricingPlansFilterListInput>;
};

export type MarkdownRemarkFrontmatterPricingPlans = {
    description?: Maybe<Scalars['String']>;
    items?: Maybe<Array<Maybe<Scalars['String']>>>;
    plan?: Maybe<Scalars['String']>;
    price?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterPricingPlansFilterInput = {
    description?: Maybe<StringQueryOperatorInput>;
    items?: Maybe<StringQueryOperatorInput>;
    plan?: Maybe<StringQueryOperatorInput>;
    price?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterPricingPlansFilterListInput = {
    elemMatch?: Maybe<MarkdownRemarkFrontmatterPricingPlansFilterInput>;
};

export type MarkdownRemarkFrontmatterTestimonials = {
    author?: Maybe<Scalars['String']>;
    quote?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkFrontmatterTestimonialsFilterInput = {
    author?: Maybe<StringQueryOperatorInput>;
    quote?: Maybe<StringQueryOperatorInput>;
};

export type MarkdownRemarkFrontmatterTestimonialsFilterListInput = {
    elemMatch?: Maybe<MarkdownRemarkFrontmatterTestimonialsFilterInput>;
};

export type MarkdownRemarkGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<MarkdownRemarkEdge>;
    nodes: Array<MarkdownRemark>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type MarkdownRemarkSortInput = {
    fields?: Maybe<Array<Maybe<MarkdownRemarkFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type MarkdownWordCount = {
    paragraphs?: Maybe<Scalars['Int']>;
    sentences?: Maybe<Scalars['Int']>;
    words?: Maybe<Scalars['Int']>;
};

export type MarkdownWordCountFilterInput = {
    paragraphs?: Maybe<IntQueryOperatorInput>;
    sentences?: Maybe<IntQueryOperatorInput>;
    words?: Maybe<IntQueryOperatorInput>;
};

/** Node Interface */
export type Node = {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};

export type NodeFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type NodeFilterListInput = {
    elemMatch?: Maybe<NodeFilterInput>;
};

export type PageInfo = {
    currentPage: Scalars['Int'];
    hasPreviousPage: Scalars['Boolean'];
    hasNextPage: Scalars['Boolean'];
    itemCount: Scalars['Int'];
    pageCount: Scalars['Int'];
    perPage?: Maybe<Scalars['Int']>;
    totalCount: Scalars['Int'];
};

export type Potrace = {
    turnPolicy?: Maybe<PotraceTurnPolicy>;
    turdSize?: Maybe<Scalars['Float']>;
    alphaMax?: Maybe<Scalars['Float']>;
    optCurve?: Maybe<Scalars['Boolean']>;
    optTolerance?: Maybe<Scalars['Float']>;
    threshold?: Maybe<Scalars['Int']>;
    blackOnWhite?: Maybe<Scalars['Boolean']>;
    color?: Maybe<Scalars['String']>;
    background?: Maybe<Scalars['String']>;
};

export type PotraceTurnPolicy =
    | 'TURNPOLICY_BLACK'
    | 'TURNPOLICY_WHITE'
    | 'TURNPOLICY_LEFT'
    | 'TURNPOLICY_RIGHT'
    | 'TURNPOLICY_MINORITY'
    | 'TURNPOLICY_MAJORITY';

export type Query = {
    file?: Maybe<File>;
    allFile: FileConnection;
    directory?: Maybe<Directory>;
    allDirectory: DirectoryConnection;
    sitePage?: Maybe<SitePage>;
    allSitePage: SitePageConnection;
    site?: Maybe<Site>;
    allSite: SiteConnection;
    imageSharp?: Maybe<ImageSharp>;
    allImageSharp: ImageSharpConnection;
    markdownRemark?: Maybe<MarkdownRemark>;
    allMarkdownRemark: MarkdownRemarkConnection;
    siteBuildMetadata?: Maybe<SiteBuildMetadata>;
    allSiteBuildMetadata: SiteBuildMetadataConnection;
    sitePlugin?: Maybe<SitePlugin>;
    allSitePlugin: SitePluginConnection;
};

export type QueryFileArgs = {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    publicURL?: Maybe<StringQueryOperatorInput>;
    childImageSharp?: Maybe<ImageSharpFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    childMarkdownRemark?: Maybe<MarkdownRemarkFilterInput>;
};

export type QueryAllFileArgs = {
    filter?: Maybe<FileFilterInput>;
    sort?: Maybe<FileSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QueryDirectoryArgs = {
    sourceInstanceName?: Maybe<StringQueryOperatorInput>;
    absolutePath?: Maybe<StringQueryOperatorInput>;
    relativePath?: Maybe<StringQueryOperatorInput>;
    extension?: Maybe<StringQueryOperatorInput>;
    size?: Maybe<IntQueryOperatorInput>;
    prettySize?: Maybe<StringQueryOperatorInput>;
    modifiedTime?: Maybe<DateQueryOperatorInput>;
    accessTime?: Maybe<DateQueryOperatorInput>;
    changeTime?: Maybe<DateQueryOperatorInput>;
    birthTime?: Maybe<DateQueryOperatorInput>;
    root?: Maybe<StringQueryOperatorInput>;
    dir?: Maybe<StringQueryOperatorInput>;
    base?: Maybe<StringQueryOperatorInput>;
    ext?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    relativeDirectory?: Maybe<StringQueryOperatorInput>;
    dev?: Maybe<IntQueryOperatorInput>;
    mode?: Maybe<IntQueryOperatorInput>;
    nlink?: Maybe<IntQueryOperatorInput>;
    uid?: Maybe<IntQueryOperatorInput>;
    gid?: Maybe<IntQueryOperatorInput>;
    rdev?: Maybe<IntQueryOperatorInput>;
    ino?: Maybe<FloatQueryOperatorInput>;
    atimeMs?: Maybe<FloatQueryOperatorInput>;
    mtimeMs?: Maybe<FloatQueryOperatorInput>;
    ctimeMs?: Maybe<FloatQueryOperatorInput>;
    atime?: Maybe<DateQueryOperatorInput>;
    mtime?: Maybe<DateQueryOperatorInput>;
    ctime?: Maybe<DateQueryOperatorInput>;
    birthtime?: Maybe<DateQueryOperatorInput>;
    birthtimeMs?: Maybe<FloatQueryOperatorInput>;
    blksize?: Maybe<IntQueryOperatorInput>;
    blocks?: Maybe<IntQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type QueryAllDirectoryArgs = {
    filter?: Maybe<DirectoryFilterInput>;
    sort?: Maybe<DirectorySortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePageArgs = {
    path?: Maybe<StringQueryOperatorInput>;
    component?: Maybe<StringQueryOperatorInput>;
    internalComponentName?: Maybe<StringQueryOperatorInput>;
    componentChunkName?: Maybe<StringQueryOperatorInput>;
    matchPath?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
    context?: Maybe<SitePageContextFilterInput>;
    pluginCreator?: Maybe<SitePluginFilterInput>;
    pluginCreatorId?: Maybe<StringQueryOperatorInput>;
    componentPath?: Maybe<StringQueryOperatorInput>;
};

export type QueryAllSitePageArgs = {
    filter?: Maybe<SitePageFilterInput>;
    sort?: Maybe<SitePageSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteArgs = {
    buildTime?: Maybe<DateQueryOperatorInput>;
    siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
    port?: Maybe<IntQueryOperatorInput>;
    host?: Maybe<StringQueryOperatorInput>;
    polyfill?: Maybe<BooleanQueryOperatorInput>;
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type QueryAllSiteArgs = {
    filter?: Maybe<SiteFilterInput>;
    sort?: Maybe<SiteSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QueryImageSharpArgs = {
    fixed?: Maybe<ImageSharpFixedFilterInput>;
    resolutions?: Maybe<ImageSharpResolutionsFilterInput>;
    fluid?: Maybe<ImageSharpFluidFilterInput>;
    sizes?: Maybe<ImageSharpSizesFilterInput>;
    original?: Maybe<ImageSharpOriginalFilterInput>;
    resize?: Maybe<ImageSharpResizeFilterInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type QueryAllImageSharpArgs = {
    filter?: Maybe<ImageSharpFilterInput>;
    sort?: Maybe<ImageSharpSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QueryMarkdownRemarkArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    frontmatter?: Maybe<MarkdownRemarkFrontmatterFilterInput>;
    excerpt?: Maybe<StringQueryOperatorInput>;
    rawMarkdownBody?: Maybe<StringQueryOperatorInput>;
    fileAbsolutePath?: Maybe<StringQueryOperatorInput>;
    fields?: Maybe<MarkdownRemarkFieldsFilterInput>;
    html?: Maybe<StringQueryOperatorInput>;
    htmlAst?: Maybe<JsonQueryOperatorInput>;
    excerptAst?: Maybe<JsonQueryOperatorInput>;
    headings?: Maybe<MarkdownHeadingFilterListInput>;
    timeToRead?: Maybe<IntQueryOperatorInput>;
    tableOfContents?: Maybe<StringQueryOperatorInput>;
    wordCount?: Maybe<MarkdownWordCountFilterInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type QueryAllMarkdownRemarkArgs = {
    filter?: Maybe<MarkdownRemarkFilterInput>;
    sort?: Maybe<MarkdownRemarkSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QuerySiteBuildMetadataArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    buildTime?: Maybe<DateQueryOperatorInput>;
};

export type QueryAllSiteBuildMetadataArgs = {
    filter?: Maybe<SiteBuildMetadataFilterInput>;
    sort?: Maybe<SiteBuildMetadataSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type QuerySitePluginArgs = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    resolve?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
    nodeAPIs?: Maybe<StringQueryOperatorInput>;
    browserAPIs?: Maybe<StringQueryOperatorInput>;
    ssrAPIs?: Maybe<StringQueryOperatorInput>;
    pluginFilepath?: Maybe<StringQueryOperatorInput>;
    packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type QueryAllSitePluginArgs = {
    filter?: Maybe<SitePluginFilterInput>;
    sort?: Maybe<SitePluginSortInput>;
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
};

export type Site = Node & {
    buildTime?: Maybe<Scalars['Date']>;
    siteMetadata?: Maybe<SiteSiteMetadata>;
    port?: Maybe<Scalars['Int']>;
    host?: Maybe<Scalars['String']>;
    polyfill?: Maybe<Scalars['Boolean']>;
    pathPrefix?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
};

export type SiteBuildTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadata = Node & {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    buildTime?: Maybe<Scalars['Date']>;
};

export type SiteBuildMetadataBuildTimeArgs = {
    formatString?: Maybe<Scalars['String']>;
    fromNow?: Maybe<Scalars['Boolean']>;
    difference?: Maybe<Scalars['String']>;
    locale?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SiteBuildMetadataEdge>;
    nodes: Array<SiteBuildMetadata>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<SiteBuildMetadataGroupConnection>;
};

export type SiteBuildMetadataConnectionDistinctArgs = {
    field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SiteBuildMetadataFieldsEnum;
};

export type SiteBuildMetadataEdge = {
    next?: Maybe<SiteBuildMetadata>;
    node: SiteBuildMetadata;
    previous?: Maybe<SiteBuildMetadata>;
};

export type SiteBuildMetadataFieldsEnum =
    | 'id'
    | 'parent___id'
    | 'parent___parent___id'
    | 'parent___parent___parent___id'
    | 'parent___parent___parent___children'
    | 'parent___parent___children'
    | 'parent___parent___children___id'
    | 'parent___parent___children___children'
    | 'parent___parent___internal___content'
    | 'parent___parent___internal___contentDigest'
    | 'parent___parent___internal___description'
    | 'parent___parent___internal___fieldOwners'
    | 'parent___parent___internal___ignoreType'
    | 'parent___parent___internal___mediaType'
    | 'parent___parent___internal___owner'
    | 'parent___parent___internal___type'
    | 'parent___children'
    | 'parent___children___id'
    | 'parent___children___parent___id'
    | 'parent___children___parent___children'
    | 'parent___children___children'
    | 'parent___children___children___id'
    | 'parent___children___children___children'
    | 'parent___children___internal___content'
    | 'parent___children___internal___contentDigest'
    | 'parent___children___internal___description'
    | 'parent___children___internal___fieldOwners'
    | 'parent___children___internal___ignoreType'
    | 'parent___children___internal___mediaType'
    | 'parent___children___internal___owner'
    | 'parent___children___internal___type'
    | 'parent___internal___content'
    | 'parent___internal___contentDigest'
    | 'parent___internal___description'
    | 'parent___internal___fieldOwners'
    | 'parent___internal___ignoreType'
    | 'parent___internal___mediaType'
    | 'parent___internal___owner'
    | 'parent___internal___type'
    | 'children'
    | 'children___id'
    | 'children___parent___id'
    | 'children___parent___parent___id'
    | 'children___parent___parent___children'
    | 'children___parent___children'
    | 'children___parent___children___id'
    | 'children___parent___children___children'
    | 'children___parent___internal___content'
    | 'children___parent___internal___contentDigest'
    | 'children___parent___internal___description'
    | 'children___parent___internal___fieldOwners'
    | 'children___parent___internal___ignoreType'
    | 'children___parent___internal___mediaType'
    | 'children___parent___internal___owner'
    | 'children___parent___internal___type'
    | 'children___children'
    | 'children___children___id'
    | 'children___children___parent___id'
    | 'children___children___parent___children'
    | 'children___children___children'
    | 'children___children___children___id'
    | 'children___children___children___children'
    | 'children___children___internal___content'
    | 'children___children___internal___contentDigest'
    | 'children___children___internal___description'
    | 'children___children___internal___fieldOwners'
    | 'children___children___internal___ignoreType'
    | 'children___children___internal___mediaType'
    | 'children___children___internal___owner'
    | 'children___children___internal___type'
    | 'children___internal___content'
    | 'children___internal___contentDigest'
    | 'children___internal___description'
    | 'children___internal___fieldOwners'
    | 'children___internal___ignoreType'
    | 'children___internal___mediaType'
    | 'children___internal___owner'
    | 'children___internal___type'
    | 'internal___content'
    | 'internal___contentDigest'
    | 'internal___description'
    | 'internal___fieldOwners'
    | 'internal___ignoreType'
    | 'internal___mediaType'
    | 'internal___owner'
    | 'internal___type'
    | 'buildTime';

export type SiteBuildMetadataFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    buildTime?: Maybe<DateQueryOperatorInput>;
};

export type SiteBuildMetadataGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SiteBuildMetadataEdge>;
    nodes: Array<SiteBuildMetadata>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type SiteBuildMetadataSortInput = {
    fields?: Maybe<Array<Maybe<SiteBuildMetadataFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SiteEdge>;
    nodes: Array<Site>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<SiteGroupConnection>;
};

export type SiteConnectionDistinctArgs = {
    field: SiteFieldsEnum;
};

export type SiteConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SiteFieldsEnum;
};

export type SiteEdge = {
    next?: Maybe<Site>;
    node: Site;
    previous?: Maybe<Site>;
};

export type SiteFieldsEnum =
    | 'buildTime'
    | 'siteMetadata___title'
    | 'siteMetadata___description'
    | 'port'
    | 'host'
    | 'polyfill'
    | 'pathPrefix'
    | 'id'
    | 'parent___id'
    | 'parent___parent___id'
    | 'parent___parent___parent___id'
    | 'parent___parent___parent___children'
    | 'parent___parent___children'
    | 'parent___parent___children___id'
    | 'parent___parent___children___children'
    | 'parent___parent___internal___content'
    | 'parent___parent___internal___contentDigest'
    | 'parent___parent___internal___description'
    | 'parent___parent___internal___fieldOwners'
    | 'parent___parent___internal___ignoreType'
    | 'parent___parent___internal___mediaType'
    | 'parent___parent___internal___owner'
    | 'parent___parent___internal___type'
    | 'parent___children'
    | 'parent___children___id'
    | 'parent___children___parent___id'
    | 'parent___children___parent___children'
    | 'parent___children___children'
    | 'parent___children___children___id'
    | 'parent___children___children___children'
    | 'parent___children___internal___content'
    | 'parent___children___internal___contentDigest'
    | 'parent___children___internal___description'
    | 'parent___children___internal___fieldOwners'
    | 'parent___children___internal___ignoreType'
    | 'parent___children___internal___mediaType'
    | 'parent___children___internal___owner'
    | 'parent___children___internal___type'
    | 'parent___internal___content'
    | 'parent___internal___contentDigest'
    | 'parent___internal___description'
    | 'parent___internal___fieldOwners'
    | 'parent___internal___ignoreType'
    | 'parent___internal___mediaType'
    | 'parent___internal___owner'
    | 'parent___internal___type'
    | 'children'
    | 'children___id'
    | 'children___parent___id'
    | 'children___parent___parent___id'
    | 'children___parent___parent___children'
    | 'children___parent___children'
    | 'children___parent___children___id'
    | 'children___parent___children___children'
    | 'children___parent___internal___content'
    | 'children___parent___internal___contentDigest'
    | 'children___parent___internal___description'
    | 'children___parent___internal___fieldOwners'
    | 'children___parent___internal___ignoreType'
    | 'children___parent___internal___mediaType'
    | 'children___parent___internal___owner'
    | 'children___parent___internal___type'
    | 'children___children'
    | 'children___children___id'
    | 'children___children___parent___id'
    | 'children___children___parent___children'
    | 'children___children___children'
    | 'children___children___children___id'
    | 'children___children___children___children'
    | 'children___children___internal___content'
    | 'children___children___internal___contentDigest'
    | 'children___children___internal___description'
    | 'children___children___internal___fieldOwners'
    | 'children___children___internal___ignoreType'
    | 'children___children___internal___mediaType'
    | 'children___children___internal___owner'
    | 'children___children___internal___type'
    | 'children___internal___content'
    | 'children___internal___contentDigest'
    | 'children___internal___description'
    | 'children___internal___fieldOwners'
    | 'children___internal___ignoreType'
    | 'children___internal___mediaType'
    | 'children___internal___owner'
    | 'children___internal___type'
    | 'internal___content'
    | 'internal___contentDigest'
    | 'internal___description'
    | 'internal___fieldOwners'
    | 'internal___ignoreType'
    | 'internal___mediaType'
    | 'internal___owner'
    | 'internal___type';

export type SiteFilterInput = {
    buildTime?: Maybe<DateQueryOperatorInput>;
    siteMetadata?: Maybe<SiteSiteMetadataFilterInput>;
    port?: Maybe<IntQueryOperatorInput>;
    host?: Maybe<StringQueryOperatorInput>;
    polyfill?: Maybe<BooleanQueryOperatorInput>;
    pathPrefix?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
};

export type SiteGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SiteEdge>;
    nodes: Array<Site>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type SitePage = Node & {
    path: Scalars['String'];
    component: Scalars['String'];
    internalComponentName: Scalars['String'];
    componentChunkName: Scalars['String'];
    matchPath?: Maybe<Scalars['String']>;
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    isCreatedByStatefulCreatePages?: Maybe<Scalars['Boolean']>;
    context?: Maybe<SitePageContext>;
    pluginCreator?: Maybe<SitePlugin>;
    pluginCreatorId?: Maybe<Scalars['String']>;
    componentPath?: Maybe<Scalars['String']>;
};

export type SitePageConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SitePageEdge>;
    nodes: Array<SitePage>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<SitePageGroupConnection>;
};

export type SitePageConnectionDistinctArgs = {
    field: SitePageFieldsEnum;
};

export type SitePageConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SitePageFieldsEnum;
};

export type SitePageContext = {
    id?: Maybe<Scalars['String']>;
    tag?: Maybe<Scalars['String']>;
};

export type SitePageContextFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    tag?: Maybe<StringQueryOperatorInput>;
};

export type SitePageEdge = {
    next?: Maybe<SitePage>;
    node: SitePage;
    previous?: Maybe<SitePage>;
};

export type SitePageFieldsEnum =
    | 'path'
    | 'component'
    | 'internalComponentName'
    | 'componentChunkName'
    | 'matchPath'
    | 'id'
    | 'parent___id'
    | 'parent___parent___id'
    | 'parent___parent___parent___id'
    | 'parent___parent___parent___children'
    | 'parent___parent___children'
    | 'parent___parent___children___id'
    | 'parent___parent___children___children'
    | 'parent___parent___internal___content'
    | 'parent___parent___internal___contentDigest'
    | 'parent___parent___internal___description'
    | 'parent___parent___internal___fieldOwners'
    | 'parent___parent___internal___ignoreType'
    | 'parent___parent___internal___mediaType'
    | 'parent___parent___internal___owner'
    | 'parent___parent___internal___type'
    | 'parent___children'
    | 'parent___children___id'
    | 'parent___children___parent___id'
    | 'parent___children___parent___children'
    | 'parent___children___children'
    | 'parent___children___children___id'
    | 'parent___children___children___children'
    | 'parent___children___internal___content'
    | 'parent___children___internal___contentDigest'
    | 'parent___children___internal___description'
    | 'parent___children___internal___fieldOwners'
    | 'parent___children___internal___ignoreType'
    | 'parent___children___internal___mediaType'
    | 'parent___children___internal___owner'
    | 'parent___children___internal___type'
    | 'parent___internal___content'
    | 'parent___internal___contentDigest'
    | 'parent___internal___description'
    | 'parent___internal___fieldOwners'
    | 'parent___internal___ignoreType'
    | 'parent___internal___mediaType'
    | 'parent___internal___owner'
    | 'parent___internal___type'
    | 'children'
    | 'children___id'
    | 'children___parent___id'
    | 'children___parent___parent___id'
    | 'children___parent___parent___children'
    | 'children___parent___children'
    | 'children___parent___children___id'
    | 'children___parent___children___children'
    | 'children___parent___internal___content'
    | 'children___parent___internal___contentDigest'
    | 'children___parent___internal___description'
    | 'children___parent___internal___fieldOwners'
    | 'children___parent___internal___ignoreType'
    | 'children___parent___internal___mediaType'
    | 'children___parent___internal___owner'
    | 'children___parent___internal___type'
    | 'children___children'
    | 'children___children___id'
    | 'children___children___parent___id'
    | 'children___children___parent___children'
    | 'children___children___children'
    | 'children___children___children___id'
    | 'children___children___children___children'
    | 'children___children___internal___content'
    | 'children___children___internal___contentDigest'
    | 'children___children___internal___description'
    | 'children___children___internal___fieldOwners'
    | 'children___children___internal___ignoreType'
    | 'children___children___internal___mediaType'
    | 'children___children___internal___owner'
    | 'children___children___internal___type'
    | 'children___internal___content'
    | 'children___internal___contentDigest'
    | 'children___internal___description'
    | 'children___internal___fieldOwners'
    | 'children___internal___ignoreType'
    | 'children___internal___mediaType'
    | 'children___internal___owner'
    | 'children___internal___type'
    | 'internal___content'
    | 'internal___contentDigest'
    | 'internal___description'
    | 'internal___fieldOwners'
    | 'internal___ignoreType'
    | 'internal___mediaType'
    | 'internal___owner'
    | 'internal___type'
    | 'isCreatedByStatefulCreatePages'
    | 'context___id'
    | 'context___tag'
    | 'pluginCreator___id'
    | 'pluginCreator___parent___id'
    | 'pluginCreator___parent___parent___id'
    | 'pluginCreator___parent___parent___children'
    | 'pluginCreator___parent___children'
    | 'pluginCreator___parent___children___id'
    | 'pluginCreator___parent___children___children'
    | 'pluginCreator___parent___internal___content'
    | 'pluginCreator___parent___internal___contentDigest'
    | 'pluginCreator___parent___internal___description'
    | 'pluginCreator___parent___internal___fieldOwners'
    | 'pluginCreator___parent___internal___ignoreType'
    | 'pluginCreator___parent___internal___mediaType'
    | 'pluginCreator___parent___internal___owner'
    | 'pluginCreator___parent___internal___type'
    | 'pluginCreator___children'
    | 'pluginCreator___children___id'
    | 'pluginCreator___children___parent___id'
    | 'pluginCreator___children___parent___children'
    | 'pluginCreator___children___children'
    | 'pluginCreator___children___children___id'
    | 'pluginCreator___children___children___children'
    | 'pluginCreator___children___internal___content'
    | 'pluginCreator___children___internal___contentDigest'
    | 'pluginCreator___children___internal___description'
    | 'pluginCreator___children___internal___fieldOwners'
    | 'pluginCreator___children___internal___ignoreType'
    | 'pluginCreator___children___internal___mediaType'
    | 'pluginCreator___children___internal___owner'
    | 'pluginCreator___children___internal___type'
    | 'pluginCreator___internal___content'
    | 'pluginCreator___internal___contentDigest'
    | 'pluginCreator___internal___description'
    | 'pluginCreator___internal___fieldOwners'
    | 'pluginCreator___internal___ignoreType'
    | 'pluginCreator___internal___mediaType'
    | 'pluginCreator___internal___owner'
    | 'pluginCreator___internal___type'
    | 'pluginCreator___resolve'
    | 'pluginCreator___name'
    | 'pluginCreator___version'
    | 'pluginCreator___pluginOptions___plugins'
    | 'pluginCreator___pluginOptions___plugins___resolve'
    | 'pluginCreator___pluginOptions___plugins___id'
    | 'pluginCreator___pluginOptions___plugins___name'
    | 'pluginCreator___pluginOptions___plugins___version'
    | 'pluginCreator___pluginOptions___plugins___browserAPIs'
    | 'pluginCreator___pluginOptions___plugins___pluginFilepath'
    | 'pluginCreator___pluginOptions___fileName'
    | 'pluginCreator___pluginOptions___path'
    | 'pluginCreator___pluginOptions___name'
    | 'pluginCreator___pluginOptions___maxWidth'
    | 'pluginCreator___pluginOptions___destinationDir'
    | 'pluginCreator___pluginOptions___modulePath'
    | 'pluginCreator___pluginOptions___develop'
    | 'pluginCreator___pluginOptions___purgeOnly'
    | 'pluginCreator___pluginOptions___pathCheck'
    | 'pluginCreator___nodeAPIs'
    | 'pluginCreator___browserAPIs'
    | 'pluginCreator___ssrAPIs'
    | 'pluginCreator___pluginFilepath'
    | 'pluginCreator___packageJson___name'
    | 'pluginCreator___packageJson___description'
    | 'pluginCreator___packageJson___version'
    | 'pluginCreator___packageJson___main'
    | 'pluginCreator___packageJson___license'
    | 'pluginCreator___packageJson___dependencies'
    | 'pluginCreator___packageJson___dependencies___name'
    | 'pluginCreator___packageJson___dependencies___version'
    | 'pluginCreator___packageJson___devDependencies'
    | 'pluginCreator___packageJson___devDependencies___name'
    | 'pluginCreator___packageJson___devDependencies___version'
    | 'pluginCreator___packageJson___peerDependencies'
    | 'pluginCreator___packageJson___peerDependencies___name'
    | 'pluginCreator___packageJson___peerDependencies___version'
    | 'pluginCreator___packageJson___keywords'
    | 'pluginCreatorId'
    | 'componentPath';

export type SitePageFilterInput = {
    path?: Maybe<StringQueryOperatorInput>;
    component?: Maybe<StringQueryOperatorInput>;
    internalComponentName?: Maybe<StringQueryOperatorInput>;
    componentChunkName?: Maybe<StringQueryOperatorInput>;
    matchPath?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    isCreatedByStatefulCreatePages?: Maybe<BooleanQueryOperatorInput>;
    context?: Maybe<SitePageContextFilterInput>;
    pluginCreator?: Maybe<SitePluginFilterInput>;
    pluginCreatorId?: Maybe<StringQueryOperatorInput>;
    componentPath?: Maybe<StringQueryOperatorInput>;
};

export type SitePageGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SitePageEdge>;
    nodes: Array<SitePage>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type SitePageSortInput = {
    fields?: Maybe<Array<Maybe<SitePageFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SitePlugin = Node & {
    id: Scalars['ID'];
    parent?: Maybe<Node>;
    children: Array<Node>;
    internal: Internal;
    resolve?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
    pluginOptions?: Maybe<SitePluginPluginOptions>;
    nodeAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    ssrAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    pluginFilepath?: Maybe<Scalars['String']>;
    packageJson?: Maybe<SitePluginPackageJson>;
};

export type SitePluginConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SitePluginEdge>;
    nodes: Array<SitePlugin>;
    pageInfo: PageInfo;
    distinct: Array<Scalars['String']>;
    group: Array<SitePluginGroupConnection>;
};

export type SitePluginConnectionDistinctArgs = {
    field: SitePluginFieldsEnum;
};

export type SitePluginConnectionGroupArgs = {
    skip?: Maybe<Scalars['Int']>;
    limit?: Maybe<Scalars['Int']>;
    field: SitePluginFieldsEnum;
};

export type SitePluginEdge = {
    next?: Maybe<SitePlugin>;
    node: SitePlugin;
    previous?: Maybe<SitePlugin>;
};

export type SitePluginFieldsEnum =
    | 'id'
    | 'parent___id'
    | 'parent___parent___id'
    | 'parent___parent___parent___id'
    | 'parent___parent___parent___children'
    | 'parent___parent___children'
    | 'parent___parent___children___id'
    | 'parent___parent___children___children'
    | 'parent___parent___internal___content'
    | 'parent___parent___internal___contentDigest'
    | 'parent___parent___internal___description'
    | 'parent___parent___internal___fieldOwners'
    | 'parent___parent___internal___ignoreType'
    | 'parent___parent___internal___mediaType'
    | 'parent___parent___internal___owner'
    | 'parent___parent___internal___type'
    | 'parent___children'
    | 'parent___children___id'
    | 'parent___children___parent___id'
    | 'parent___children___parent___children'
    | 'parent___children___children'
    | 'parent___children___children___id'
    | 'parent___children___children___children'
    | 'parent___children___internal___content'
    | 'parent___children___internal___contentDigest'
    | 'parent___children___internal___description'
    | 'parent___children___internal___fieldOwners'
    | 'parent___children___internal___ignoreType'
    | 'parent___children___internal___mediaType'
    | 'parent___children___internal___owner'
    | 'parent___children___internal___type'
    | 'parent___internal___content'
    | 'parent___internal___contentDigest'
    | 'parent___internal___description'
    | 'parent___internal___fieldOwners'
    | 'parent___internal___ignoreType'
    | 'parent___internal___mediaType'
    | 'parent___internal___owner'
    | 'parent___internal___type'
    | 'children'
    | 'children___id'
    | 'children___parent___id'
    | 'children___parent___parent___id'
    | 'children___parent___parent___children'
    | 'children___parent___children'
    | 'children___parent___children___id'
    | 'children___parent___children___children'
    | 'children___parent___internal___content'
    | 'children___parent___internal___contentDigest'
    | 'children___parent___internal___description'
    | 'children___parent___internal___fieldOwners'
    | 'children___parent___internal___ignoreType'
    | 'children___parent___internal___mediaType'
    | 'children___parent___internal___owner'
    | 'children___parent___internal___type'
    | 'children___children'
    | 'children___children___id'
    | 'children___children___parent___id'
    | 'children___children___parent___children'
    | 'children___children___children'
    | 'children___children___children___id'
    | 'children___children___children___children'
    | 'children___children___internal___content'
    | 'children___children___internal___contentDigest'
    | 'children___children___internal___description'
    | 'children___children___internal___fieldOwners'
    | 'children___children___internal___ignoreType'
    | 'children___children___internal___mediaType'
    | 'children___children___internal___owner'
    | 'children___children___internal___type'
    | 'children___internal___content'
    | 'children___internal___contentDigest'
    | 'children___internal___description'
    | 'children___internal___fieldOwners'
    | 'children___internal___ignoreType'
    | 'children___internal___mediaType'
    | 'children___internal___owner'
    | 'children___internal___type'
    | 'internal___content'
    | 'internal___contentDigest'
    | 'internal___description'
    | 'internal___fieldOwners'
    | 'internal___ignoreType'
    | 'internal___mediaType'
    | 'internal___owner'
    | 'internal___type'
    | 'resolve'
    | 'name'
    | 'version'
    | 'pluginOptions___plugins'
    | 'pluginOptions___plugins___resolve'
    | 'pluginOptions___plugins___id'
    | 'pluginOptions___plugins___name'
    | 'pluginOptions___plugins___version'
    | 'pluginOptions___plugins___pluginOptions___name'
    | 'pluginOptions___plugins___pluginOptions___maxWidth'
    | 'pluginOptions___plugins___pluginOptions___destinationDir'
    | 'pluginOptions___plugins___browserAPIs'
    | 'pluginOptions___plugins___pluginFilepath'
    | 'pluginOptions___fileName'
    | 'pluginOptions___path'
    | 'pluginOptions___name'
    | 'pluginOptions___maxWidth'
    | 'pluginOptions___destinationDir'
    | 'pluginOptions___modulePath'
    | 'pluginOptions___develop'
    | 'pluginOptions___purgeOnly'
    | 'pluginOptions___pathCheck'
    | 'nodeAPIs'
    | 'browserAPIs'
    | 'ssrAPIs'
    | 'pluginFilepath'
    | 'packageJson___name'
    | 'packageJson___description'
    | 'packageJson___version'
    | 'packageJson___main'
    | 'packageJson___license'
    | 'packageJson___dependencies'
    | 'packageJson___dependencies___name'
    | 'packageJson___dependencies___version'
    | 'packageJson___devDependencies'
    | 'packageJson___devDependencies___name'
    | 'packageJson___devDependencies___version'
    | 'packageJson___peerDependencies'
    | 'packageJson___peerDependencies___name'
    | 'packageJson___peerDependencies___version'
    | 'packageJson___keywords';

export type SitePluginFilterInput = {
    id?: Maybe<StringQueryOperatorInput>;
    parent?: Maybe<NodeFilterInput>;
    children?: Maybe<NodeFilterListInput>;
    internal?: Maybe<InternalFilterInput>;
    resolve?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    pluginOptions?: Maybe<SitePluginPluginOptionsFilterInput>;
    nodeAPIs?: Maybe<StringQueryOperatorInput>;
    browserAPIs?: Maybe<StringQueryOperatorInput>;
    ssrAPIs?: Maybe<StringQueryOperatorInput>;
    pluginFilepath?: Maybe<StringQueryOperatorInput>;
    packageJson?: Maybe<SitePluginPackageJsonFilterInput>;
};

export type SitePluginGroupConnection = {
    totalCount: Scalars['Int'];
    edges: Array<SitePluginEdge>;
    nodes: Array<SitePlugin>;
    pageInfo: PageInfo;
    field: Scalars['String'];
    fieldValue?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJson = {
    name?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
    main?: Maybe<Scalars['String']>;
    license?: Maybe<Scalars['String']>;
    dependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDependencies>>>;
    devDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonDevDependencies>>>;
    peerDependencies?: Maybe<Array<Maybe<SitePluginPackageJsonPeerDependencies>>>;
    keywords?: Maybe<Array<Maybe<Scalars['String']>>>;
};

export type SitePluginPackageJsonDependencies = {
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDependenciesFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDependenciesFilterListInput = {
    elemMatch?: Maybe<SitePluginPackageJsonDependenciesFilterInput>;
};

export type SitePluginPackageJsonDevDependencies = {
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonDevDependenciesFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonDevDependenciesFilterListInput = {
    elemMatch?: Maybe<SitePluginPackageJsonDevDependenciesFilterInput>;
};

export type SitePluginPackageJsonFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    main?: Maybe<StringQueryOperatorInput>;
    license?: Maybe<StringQueryOperatorInput>;
    dependencies?: Maybe<SitePluginPackageJsonDependenciesFilterListInput>;
    devDependencies?: Maybe<SitePluginPackageJsonDevDependenciesFilterListInput>;
    peerDependencies?: Maybe<SitePluginPackageJsonPeerDependenciesFilterListInput>;
    keywords?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependencies = {
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
};

export type SitePluginPackageJsonPeerDependenciesFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPackageJsonPeerDependenciesFilterListInput = {
    elemMatch?: Maybe<SitePluginPackageJsonPeerDependenciesFilterInput>;
};

export type SitePluginPluginOptions = {
    plugins?: Maybe<Array<Maybe<SitePluginPluginOptionsPlugins>>>;
    fileName?: Maybe<Scalars['String']>;
    path?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    maxWidth?: Maybe<Scalars['Int']>;
    destinationDir?: Maybe<Scalars['String']>;
    modulePath?: Maybe<Scalars['String']>;
    develop?: Maybe<Scalars['Boolean']>;
    purgeOnly?: Maybe<Array<Maybe<Scalars['String']>>>;
    pathCheck?: Maybe<Scalars['Boolean']>;
};

export type SitePluginPluginOptionsFilterInput = {
    plugins?: Maybe<SitePluginPluginOptionsPluginsFilterListInput>;
    fileName?: Maybe<StringQueryOperatorInput>;
    path?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    maxWidth?: Maybe<IntQueryOperatorInput>;
    destinationDir?: Maybe<StringQueryOperatorInput>;
    modulePath?: Maybe<StringQueryOperatorInput>;
    develop?: Maybe<BooleanQueryOperatorInput>;
    purgeOnly?: Maybe<StringQueryOperatorInput>;
    pathCheck?: Maybe<BooleanQueryOperatorInput>;
};

export type SitePluginPluginOptionsPlugins = {
    resolve?: Maybe<Scalars['String']>;
    id?: Maybe<Scalars['String']>;
    name?: Maybe<Scalars['String']>;
    version?: Maybe<Scalars['String']>;
    pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptions>;
    browserAPIs?: Maybe<Array<Maybe<Scalars['String']>>>;
    pluginFilepath?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsFilterInput = {
    resolve?: Maybe<StringQueryOperatorInput>;
    id?: Maybe<StringQueryOperatorInput>;
    name?: Maybe<StringQueryOperatorInput>;
    version?: Maybe<StringQueryOperatorInput>;
    pluginOptions?: Maybe<SitePluginPluginOptionsPluginsPluginOptionsFilterInput>;
    browserAPIs?: Maybe<StringQueryOperatorInput>;
    pluginFilepath?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginPluginOptionsPluginsFilterListInput = {
    elemMatch?: Maybe<SitePluginPluginOptionsPluginsFilterInput>;
};

export type SitePluginPluginOptionsPluginsPluginOptions = {
    name?: Maybe<Scalars['String']>;
    maxWidth?: Maybe<Scalars['Int']>;
    destinationDir?: Maybe<Scalars['String']>;
};

export type SitePluginPluginOptionsPluginsPluginOptionsFilterInput = {
    name?: Maybe<StringQueryOperatorInput>;
    maxWidth?: Maybe<IntQueryOperatorInput>;
    destinationDir?: Maybe<StringQueryOperatorInput>;
};

export type SitePluginSortInput = {
    fields?: Maybe<Array<Maybe<SitePluginFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SiteSiteMetadata = {
    title?: Maybe<Scalars['String']>;
    description?: Maybe<Scalars['String']>;
};

export type SiteSiteMetadataFilterInput = {
    title?: Maybe<StringQueryOperatorInput>;
    description?: Maybe<StringQueryOperatorInput>;
};

export type SiteSortInput = {
    fields?: Maybe<Array<Maybe<SiteFieldsEnum>>>;
    order?: Maybe<Array<Maybe<SortOrderEnum>>>;
};

export type SortOrderEnum = 'ASC' | 'DESC';

export type StringQueryOperatorInput = {
    eq?: Maybe<Scalars['String']>;
    ne?: Maybe<Scalars['String']>;
    in?: Maybe<Array<Maybe<Scalars['String']>>>;
    nin?: Maybe<Array<Maybe<Scalars['String']>>>;
    regex?: Maybe<Scalars['String']>;
    glob?: Maybe<Scalars['String']>;
};

export type BlogRollQueryQueryVariables = Exact<{ [key: string]: never }>;

export type BlogRollQueryQuery = {
    allMarkdownRemark: {
        edges: Array<{
            node: Pick<MarkdownRemark, 'excerpt' | 'id'> & {
                fields?: Maybe<Pick<MarkdownRemarkFields, 'slug'>>;
                frontmatter?: Maybe<
                    Pick<
                        MarkdownRemarkFrontmatter,
                        'title' | 'templateKey' | 'date' | 'featuredpost'
                    > & {
                        featuredimage?: Maybe<{
                            childImageSharp?: Maybe<{
                                fluid?: Maybe<GatsbyImageSharpFluidFragment>;
                            }>;
                        }>;
                    }
                >;
            };
        }>;
    };
};

export type Site_Metadata_QueryQueryVariables = Exact<{ [key: string]: never }>;

export type Site_Metadata_QueryQuery = {
    site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title' | 'description'>> }>;
};

export type TagsQueryQueryVariables = Exact<{ [key: string]: never }>;

export type TagsQueryQuery = {
    site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }>;
    allMarkdownRemark: {
        group: Array<Pick<MarkdownRemarkGroupConnection, 'fieldValue' | 'totalCount'>>;
    };
};

export type AboutPageQueryVariables = Exact<{
    id: Scalars['String'];
}>;

export type AboutPageQuery = {
    markdownRemark?: Maybe<
        Pick<MarkdownRemark, 'html'> & {
            frontmatter?: Maybe<Pick<MarkdownRemarkFrontmatter, 'title'>>;
        }
    >;
};

export type BlogPostByIdQueryVariables = Exact<{
    id: Scalars['String'];
}>;

export type BlogPostByIdQuery = {
    markdownRemark?: Maybe<
        Pick<MarkdownRemark, 'id' | 'html'> & {
            frontmatter?: Maybe<
                Pick<MarkdownRemarkFrontmatter, 'date' | 'title' | 'description' | 'tags'> & {
                    featuredimage?: Maybe<{
                        childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }>;
                    }>;
                }
            >;
        }
    >;
};

export type IndexPageTemplateQueryVariables = Exact<{ [key: string]: never }>;

export type IndexPageTemplateQuery = {
    markdownRemark?: Maybe<{
        frontmatter?: Maybe<
            Pick<MarkdownRemarkFrontmatter, 'title' | 'heading' | 'subheading'> & {
                image?: Maybe<{
                    childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }>;
                }>;
                cover?: Maybe<{
                    childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }>;
                }>;
                mainImage?: Maybe<{
                    childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }>;
                }>;
                editorNote?: Maybe<
                    Pick<MarkdownRemarkFrontmatterEditorNote, 'title' | 'description'>
                >;
                advice?: Maybe<{
                    left?: Maybe<{
                        childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }>;
                    }>;
                    right?: Maybe<{
                        childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }>;
                    }>;
                }>;
                articles?: Maybe<
                    Pick<MarkdownRemarkFrontmatterArticles, 'heading' | 'description'> & {
                        blurbs?: Maybe<
                            Array<
                                Maybe<{
                                    image?: Maybe<{
                                        childImageSharp?: Maybe<{
                                            fluid?: Maybe<GatsbyImageSharpFluidFragment>;
                                        }>;
                                    }>;
                                }>
                            >
                        >;
                    }
                >;
                doodles?: Maybe<
                    Array<
                        Maybe<{
                            image?: Maybe<{
                                childImageSharp?: Maybe<{
                                    fluid?: Maybe<GatsbyImageSharpFluidFragment>;
                                }>;
                            }>;
                        }>
                    >
                >;
            }
        >;
    }>;
};

export type ProductPageQueryVariables = Exact<{
    id: Scalars['String'];
}>;

export type ProductPageQuery = {
    markdownRemark?: Maybe<{
        frontmatter?: Maybe<
            Pick<MarkdownRemarkFrontmatter, 'title' | 'heading' | 'description'> & {
                image?: Maybe<{
                    childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }>;
                }>;
                intro?: Maybe<
                    Pick<MarkdownRemarkFrontmatterIntro, 'heading' | 'description'> & {
                        blurbs?: Maybe<
                            Array<
                                Maybe<
                                    Pick<MarkdownRemarkFrontmatterIntroBlurbs, 'text'> & {
                                        image?: Maybe<{
                                            childImageSharp?: Maybe<{
                                                fluid?: Maybe<GatsbyImageSharpFluidFragment>;
                                            }>;
                                        }>;
                                    }
                                >
                            >
                        >;
                    }
                >;
                main?: Maybe<
                    Pick<MarkdownRemarkFrontmatterMain, 'heading' | 'description'> & {
                        image1?: Maybe<
                            Pick<MarkdownRemarkFrontmatterMainImage1, 'alt'> & {
                                image?: Maybe<{
                                    childImageSharp?: Maybe<{
                                        fluid?: Maybe<GatsbyImageSharpFluidFragment>;
                                    }>;
                                }>;
                            }
                        >;
                        image2?: Maybe<
                            Pick<MarkdownRemarkFrontmatterMainImage2, 'alt'> & {
                                image?: Maybe<{
                                    childImageSharp?: Maybe<{
                                        fluid?: Maybe<GatsbyImageSharpFluidFragment>;
                                    }>;
                                }>;
                            }
                        >;
                        image3?: Maybe<
                            Pick<MarkdownRemarkFrontmatterMainImage3, 'alt'> & {
                                image?: Maybe<{
                                    childImageSharp?: Maybe<{
                                        fluid?: Maybe<GatsbyImageSharpFluidFragment>;
                                    }>;
                                }>;
                            }
                        >;
                    }
                >;
                testimonials?: Maybe<
                    Array<Maybe<Pick<MarkdownRemarkFrontmatterTestimonials, 'author' | 'quote'>>>
                >;
                full_image?: Maybe<{
                    childImageSharp?: Maybe<{ fluid?: Maybe<GatsbyImageSharpFluidFragment> }>;
                }>;
                pricing?: Maybe<
                    Pick<MarkdownRemarkFrontmatterPricing, 'heading' | 'description'> & {
                        plans?: Maybe<
                            Array<
                                Maybe<
                                    Pick<
                                        MarkdownRemarkFrontmatterPricingPlans,
                                        'description' | 'items' | 'plan' | 'price'
                                    >
                                >
                            >
                        >;
                    }
                >;
            }
        >;
    }>;
};

export type TagPageQueryVariables = Exact<{
    tag?: Maybe<Scalars['String']>;
}>;

export type TagPageQuery = {
    site?: Maybe<{ siteMetadata?: Maybe<Pick<SiteSiteMetadata, 'title'>> }>;
    allMarkdownRemark: Pick<MarkdownRemarkConnection, 'totalCount'> & {
        edges: Array<{
            node: {
                fields?: Maybe<Pick<MarkdownRemarkFields, 'slug'>>;
                frontmatter?: Maybe<Pick<MarkdownRemarkFrontmatter, 'title'>>;
            };
        }>;
    };
};

export type GatsbyImageSharpFixedFragment = Pick<
    ImageSharpFixed,
    'base64' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpFixed_TracedSvgFragment = Pick<
    ImageSharpFixed,
    'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpFixed_WithWebpFragment = Pick<
    ImageSharpFixed,
    'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFixed_WithWebp_TracedSvgFragment = Pick<
    ImageSharpFixed,
    'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFixed_NoBase64Fragment = Pick<
    ImageSharpFixed,
    'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpFixed_WithWebp_NoBase64Fragment = Pick<
    ImageSharpFixed,
    'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpFluidFragment = Pick<
    ImageSharpFluid,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpFluidLimitPresentationSizeFragment = {
    maxHeight: ImageSharpFluid['presentationHeight'];
    maxWidth: ImageSharpFluid['presentationWidth'];
};

export type GatsbyImageSharpFluid_TracedSvgFragment = Pick<
    ImageSharpFluid,
    'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpFluid_WithWebpFragment = Pick<
    ImageSharpFluid,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpFluid_WithWebp_TracedSvgFragment = Pick<
    ImageSharpFluid,
    'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpFluid_NoBase64Fragment = Pick<
    ImageSharpFluid,
    'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpFluid_WithWebp_NoBase64Fragment = Pick<
    ImageSharpFluid,
    'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpResolutionsFragment = Pick<
    ImageSharpResolutions,
    'base64' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpResolutions_TracedSvgFragment = Pick<
    ImageSharpResolutions,
    'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpResolutions_WithWebpFragment = Pick<
    ImageSharpResolutions,
    'base64' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpResolutions_WithWebp_TracedSvgFragment = Pick<
    ImageSharpResolutions,
    'tracedSVG' | 'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpResolutions_NoBase64Fragment = Pick<
    ImageSharpResolutions,
    'width' | 'height' | 'src' | 'srcSet'
>;

export type GatsbyImageSharpResolutions_WithWebp_NoBase64Fragment = Pick<
    ImageSharpResolutions,
    'width' | 'height' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp'
>;

export type GatsbyImageSharpSizesFragment = Pick<
    ImageSharpSizes,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpSizes_TracedSvgFragment = Pick<
    ImageSharpSizes,
    'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpSizes_WithWebpFragment = Pick<
    ImageSharpSizes,
    'base64' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpSizes_WithWebp_TracedSvgFragment = Pick<
    ImageSharpSizes,
    'tracedSVG' | 'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;

export type GatsbyImageSharpSizes_NoBase64Fragment = Pick<
    ImageSharpSizes,
    'aspectRatio' | 'src' | 'srcSet' | 'sizes'
>;

export type GatsbyImageSharpSizes_WithWebp_NoBase64Fragment = Pick<
    ImageSharpSizes,
    'aspectRatio' | 'src' | 'srcSet' | 'srcWebp' | 'srcSetWebp' | 'sizes'
>;
