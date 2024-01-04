/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      backgroundImage:{
        "deleteIcon":"url('/public/delete.svg')",
        "deleteIconBase":"url('/public/delete-base.svg')",
        "editIcon":"url('/public/edit.svg')",
        "editIconBase":"url('/public/edit-base.svg')",
        "confirmIcon": "url('/public/confirm.svg')",
        "cancelIcon": "url('/public/cancel.svg')"
      }
    },
  },
  plugins: [],
}