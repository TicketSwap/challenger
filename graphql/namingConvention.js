module.exports = function (name) {
  if (!name.endsWith('Document')) return name

  return name
    .replace('Document', '')
    .replace(/([A-Z])/g, '_$1')
    .toUpperCase()
}
