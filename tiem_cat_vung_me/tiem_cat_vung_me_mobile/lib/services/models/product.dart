class Product {
  Product({
    required this.id,
    required this.img,
    required this.title,
    required this.price,
    required this.quantitySold,
    required this.description,
  });

  final String id;
  final String img;
  final String title;
  final double price;
  final int quantitySold;
  final String description;
}
