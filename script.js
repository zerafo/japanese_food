function buff(){
    navigator.clipboard.writeText('kailagongrler@gmail.com')
  .then(() => {
    // Получилось!
  })
  .catch(err => {
    console.log('Something went wrong', err);
  });
}