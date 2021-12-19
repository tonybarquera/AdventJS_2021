function fixFiles(files) {
  const filesList = [];
  let answer = [];

  files.forEach(file => {
    if(filesList[file] === undefined) {
      filesList[file] = 0;
    } else {
      filesList[file]++;
    }
    // console.log(filesList[file])
    const cont = filesList[file];
    answer.push(`${file}${(cont > 0 ? `(${cont})` : ``)}`);
  })

  return answer;
}

const files = ['photo', 'postcard', 'photo', 'photo', 'video']
fixFiles(files) // ['photo', 'postcard', 'photo(1)', 'photo(2)', 'video']

const files2 = ['file', 'file', 'file', 'game', 'game']
fixFiles(files2) // = ['file', 'file(1)', 'file(2)', 'game', 'game(1)']

// ojo que los elfos ya tenían archivos con (1)... ¡y pueden estar repetidos!
const files3 = ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)']
fixFiles(files3) // ['file', 'file(1)', 'icon', 'icon(1)', 'icon(1)(1)']