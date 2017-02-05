module.exports = {
    'list|1-10': [{
        'id|+1': 1,
        'name|1': ['nora', 'nick', 'suza'],
        'name1': {
            first: '@FIRST',
            middle: '@FIRST',
            last: '@LAST',
            full: '@first @middle @last'
        }
    }],
    'count': function() {
        return this.list.length;
    }
};