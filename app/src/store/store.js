module.exports = {
    bookmarks : [
        {
            BookmarkId : "11",
            BookmarkName : "index",
            BookmarkSrc  : "http://www.petsworld.in/blog/wp-content/uploads/2014/09/adorable-cat.jpg"
        }
    ],
    files : [
        {
            FileId : "11",
            FileName : "index",
            FileType : "html",
            FileSize : "15",
            // language=HTML
            FileFill : `
            <!DOCTYPE/>
            <html>
        <head>
            <title>file-manager</title>
        </head>
        <body>
        <div>
            <p>Hello</p>
            <h1>Hello</h1>
            <img width="200px" height="100px" src="http://www.petsworld.in/blog/wp-content/uploads/2014/09/adorable-cat.jpg" alt="cat">
        </div>
        </body>
        </html>
                    `,
            FileSrc  : "http://www.petsworld.in/blog/wp-content/uploads/2014/09/adorable-cat.jpg"
        },
        {
            FileId : "12",
            FileName : "simpleText",
            FileType : "txt",
            FileSize : "24",
            FileFill : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum tincidunt elit, fermentum aliquam diam consectetur sed. Integer cursus pellentesque ligula quis tempor. Morbi pharetra lacus in condimentum rutrum. Nam molestie, nulla sed hendrerit volutpat, lectus eros vulputate neque, ac congue lacus tellus nec libero. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Curabitur laoreet lacinia erat, sed feugiat justo tincidunt a. Donec molestie dictum libero in auctor. Maecenas accumsan et massa ac porta.",
            FileSrc : false
        },
        {
            FileId : "13",
            FileName : "cat",
            FileType : "jpg",
            FileSize : "220",
            FileFill : false,
            FileSrc : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSusOkTrDPeKP9k-JosqYy5I1gxoDvfdWRDoZ8-9sBAZrdKSE7e"
        }
    ]
};
