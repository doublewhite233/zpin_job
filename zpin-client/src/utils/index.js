export function getRedirectTo (type, post) {
  let path = '';
  console.log(type, post);
  if (post === undefined) {
    path = '/userInfo';
  } else if (post !== undefined) {
    path = '/';
  }
  return path;
}
