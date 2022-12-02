export default function disabledProfileForm(initialValues, changeValues) {
  delete initialValues._id
  delete initialValues.__v
  delete initialValues.user_id;
  let diff = 0;
  Object.keys(initialValues).map((v) => {
    if (initialValues[v] !== changeValues[v]) {
      diff += 1;
    }
  });
  return diff === 0;
}
