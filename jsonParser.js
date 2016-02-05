function parseJsonData(object){

  return((object.image.url.current));

}


var object = {
	"id": "0001",
	"type": "donut",
	"name": "Cake",
	"image":
		{
			"url": {
      "current":"images/thumbnails/0001.jpg"

      },
			"width": 200,
			"height": 200
		},
	"thumbnail":
		{
			"url": "images/thumbnails/0001.jpg",
			"width": 32,
			"height": 32
		}
};
console.log(parseJsonData(object));
