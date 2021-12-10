function createXmasTree(height) {
  let tree = '';
  let espacios = height - 1;

  for(let i = 0 ; i < height ; i++) {
    for(let j = 0 ; j < espacios ; j++) { tree = tree + '_'; }
    for(let j = 0 ; j < height * 2 - espacios * 2 - 1 ; j++) { tree = tree + '*'; }
    for(let j = 0 ; j < espacios ; j++) { tree = tree + '_'; }

    tree = tree + '\n';
    espacios--;
  }

  for(let j = 0 ; j < 2 ; j++) {
    for(let i = 0 ; i < height - 1 ; i++) { tree = tree + '_'; }
  
    tree += '#';
  
    for(let i = 0 ; i < height - 1 ; i++) { tree = tree + '_'; }
    if(j === 0) { tree += '\n'; }
  }

  // console.log(tree);
  return tree;
}

createXmasTree(5);
createXmasTree(3);
createXmasTree(2);