export class Form {
  constructor(id) {
    this.form = document.getElementById(id);
  }

  isValid() {
    return this.form.checkValidity();
  }

  reset() {
    this.form.reset();
  }

  getValues() {
    const formData = new FormData(this.form);
    return Object.fromEntries(formData.entries());
  }
}