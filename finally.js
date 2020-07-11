fetch('http://abc.com')
    .then(data => data.json())
    .catch(err => console.error(err))
    .finally(() => console.log('processed!'))
//This new callback will always be executed, if catch was called or not.