const runApp = (script) => {
    return script.chunks[4].buf ? script.chunks[4].buf.toString('utf8') : 'run';
};

module.exports = runApp;