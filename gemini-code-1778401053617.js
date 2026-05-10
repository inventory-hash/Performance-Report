function doGet() {
  return HtmlService.createTemplateFromFile('Index')
      .evaluate()
      .setTitle('Petpooja Ops Dashboard')
      .addMetaTag('viewport', 'width=device-width, initial-scale=1');
}