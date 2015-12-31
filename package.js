Package.describe({
    name: "nirpeled:meteor-github",
    summary: "Wrapper for Github API 0.10.7",
    version: "0.10.7_1",
    git: "https://github.com/nirpeled/meteor-github.git"
});

Package.onUse(function(api) {
    api.versionsFrom('METEOR@0.9.0');

    api.addFiles('github/github.js');
    api.addFiles('export.js');

    api.export('Github');
});