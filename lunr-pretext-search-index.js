var ptx_lunr_search_style = "textbook";
var ptx_lunr_docs = [
{
  "id": "shorttitlelowercase-2",
  "level": "1",
  "url": "shorttitlelowercase-2.html",
  "type": "Front Matter",
  "number": "",
  "title": "Front Matter",
  "body": "  Author S. Deterding    This is the abstract.   "
},
{
  "id": "section-1",
  "level": "1",
  "url": "section-1.html",
  "type": "Section",
  "number": "1",
  "title": "My First Section",
  "body": " My First Section   Some words    My First Subsection  Some more words  foo   A frog   A nice-looking frog with a longish description.    Bar:   "
},
{
  "id": "subsection-1-4",
  "level": "2",
  "url": "section-1.html#subsection-1-4",
  "type": "Figure",
  "number": "1.1",
  "title": "",
  "body": " A frog   A nice-looking frog with a longish description.   "
},
{
  "id": "section-2",
  "level": "1",
  "url": "section-2.html",
  "type": "Section",
  "number": "2",
  "title": "My Additional Section",
  "body": " My Additional Section  foo   The graph made by TikZ   A 5-cycle     bar  Here is math tada  Here is a math equation   "
},
{
  "id": "figure-tikz-example-diagram",
  "level": "2",
  "url": "section-2.html#figure-tikz-example-diagram",
  "type": "Figure",
  "number": "2.1",
  "title": "",
  "body": " The graph made by TikZ   A 5-cycle    "
},
{
  "id": "sampleworksheet",
  "level": "1",
  "url": "sampleworksheet.html",
  "type": "Section",
  "number": "3",
  "title": "Worksheets",
  "body": " Worksheets   Worksheet 1   Evaluate the double integral where is the triangle with vertices at , and .    Evaluate the contour integral where is the triangle with vertices at , and oriented in the counterclockwise direction.    "
},
{
  "id": "worksheet-geometric-prelude-2",
  "level": "2",
  "url": "sampleworksheet.html#worksheet-geometric-prelude-2",
  "type": "Worksheet Exercise",
  "number": "3.1.1",
  "title": "",
  "body": " Evaluate the double integral where is the triangle with vertices at , and .  "
},
{
  "id": "worksheet-geometric-prelude-3",
  "level": "2",
  "url": "sampleworksheet.html#worksheet-geometric-prelude-3",
  "type": "Worksheet Exercise",
  "number": "3.1.2",
  "title": "",
  "body": " Evaluate the contour integral where is the triangle with vertices at , and oriented in the counterclockwise direction.  "
}
]

var ptx_lunr_idx = lunr(function () {
  this.ref('id')
  this.field('title')
  this.field('body')
  this.metadataWhitelist = ['position']

  ptx_lunr_docs.forEach(function (doc) {
    this.add(doc)
  }, this)
})
