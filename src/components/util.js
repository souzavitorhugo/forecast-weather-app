export function srid() {
    function s4() {
      return Math.floor((1 + Math.random()) * 0x10000)
        .toString(16)
        .substring(1);
    }
  
    return `${s4()}-${s4()}-${s4()}`;
  }

export function hasFormError(formik, field) {
  if (!!formik.errors[field] && formik.touched[field]) {
    return formik.errors[field];
  }

  return null;
}
