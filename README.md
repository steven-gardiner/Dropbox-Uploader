# Dropbox Uploader

A trivial fork of [Andrea Fabrizi's
work](https://github.com/andreafabrizi/Dropbox-Uploader), allowing
installation of that project by [npm](https://www.npmjs.org/).  All
credit belongs to Andrea Fabrizi, I just added the `package.json`
file.

# Standalone installation

The following command

    npm install -g git://github.com/steven-gardiner/Dropbox-Uploader.git

will place the `dropbox-uploader` command in your path.

# Inclusion in other nodejs projects

Add a dependency to your nodejs package.json file:

    "Dropbox-Uploader": "git://github.com/steven-gardiner/Dropbox-Uploader.git",

Then you can call the executable by using the path returned by the
following method call:

    require.resolve("./node_modules/.bin/dropbox-uploader");




