function checkIsSameTree(treeA, treeB) {
  const revisa = (treeA, treeB, ans) => {
    let answer = ans;

    if(treeA.left !== null && treeB.left !== null) {
      if(treeA.left.value === treeB.left.value) {
        answer = revisa(treeA.left, treeB.left, answer);
      } else {
        return false;
      }
    } else if(!(treeA.left === null && treeB.left === null)) {
      return false;
    }

    if(treeA.right !== null && treeB.right !== null) {
      if(treeA.right.value === treeB.right.value) {
        answer = revisa(treeA.right, treeB.right, answer);
      } else {
        return false;
      }
    } else if(!(treeA.right === null && treeB.right === null)) {
      return false;
    }

    return answer;
  }

  return revisa(treeA, treeB, true);
}

const tree = {
  value: 1,
  left: { value: 2, left: null, right: null },
  right: { value: 3, left: null, right: null }
}

checkIsSameTree(tree, tree) // true

const tree2 = {
  value: 1,
  left: { value: 3, left: { value: 2, left: null, right: null }, right: null },
  right: { value: 5, left: null, right: { value: 4, left: null, right: null } }
}

checkIsSameTree(tree, tree2) // false
checkIsSameTree(tree2, tree2) // true