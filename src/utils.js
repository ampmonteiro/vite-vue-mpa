export const getUrlQueryString = (val) => {
  const existParam = window.location.search.includes('?');

  const existSlug = window.location.search
    .split('?')[1]
    .includes(val);

  const id =
    window.location.search.includes('=') &&
    +window.location.search.split('=')[1];

  if (!existParam || !existSlug || !id) {
    backTo('/');
    return;
  }

  return id;
};

export const backTo = (url) => {
  console.log('nao exist');
  const pro = window.location.protocol;
  const host = window.location.host;

  window.location.replace(`${pro}//${host}${url}`);
};

export const findArticle = (vals = []) => {
  const selected = getUrlQueryString('id');

  return vals.find((c) => c.id === selected) ?? null;
};

const getArticle = (rs, startFramework) => {
  const article = findArticle(rs);

  if (!article) {
    backTo('/');
    return;
  }

  startFramework(article);
};

export const load = async (startFramework, all = true) => {
  try {
    const req = await fetch('/api.json');

    const rs = await req.json();

    if (!all) {
      getArticle(rs, startFramework);
      return;
    }

    startFramework(rs);
  } catch (error) {
    startFramework([], true);
  }
};
