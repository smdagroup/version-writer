const fs = require('fs');
const formatDistanceStrict = require('date-fns/formatDistanceStrict');

/**
 * @param {string} versionJsonPath
 * @param {Date} startedAt
 */
const getStatus = (versionJsonPath, startedAt) => {
    const versionJson = JSON.parse(fs.readFileSync(versionJsonPath).toString());
    return {
        ...versionJson,
        builtAtRelative: `${formatDistanceStrict(new Date(versionJson.builtAt), new Date())} ago`,
        startedAt,
        startedAtRelative: `${formatDistanceStrict(startedAt, new Date())} ago`,
    };
};

module.exports = {
    getStatus,
};
