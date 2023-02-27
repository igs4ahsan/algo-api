export function formData<D>(data: D, fileKeys: string[] = []) {
  const form = new FormData();
  Object.getOwnPropertyNames(data).forEach((prop: any) => {
    if (fileKeys.includes(prop)) {
      const files: globalThis.FileList = data[prop];
      [...files].forEach(function (file, i) {
        form.append(`${prop}[]`, file, file.name);
      });
    } else {
      form.append(prop, data[prop]);
    }
  });
  return form;
}

export function qstring<Q>(query: Q) {
  let qstring = '';
  Object.getOwnPropertyNames(query).forEach((key) => {
    qstring += `&${key}=${query[key]}`;
  });
  qstring = qstring.replace('&', '?');
  return qstring;
}
