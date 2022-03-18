const ProductsServices = require("./services/Products")

const { connect } = require("mongoose");

const connection = async () => {
    try {
      await connect("mongodb://127.0.0.1:27017/Hard-warehouse");
      console.log("Database is connected");
    } catch (error) {
      console.log(error);
    }
}


[{
    title: "Ryzen 5 5600x",
    category: "CPU",
    stock: 10,
    price: 228,
    describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/3ef757133d38ac40afe75da691ba7d60.256p.jpg",
    tags: ["CPU", "ryzen", "AMD"]
},
{
    title: "Ryzen 7 5800x",
    category: "CPU",
    stock: 10,
    price: 345,
    describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/9b4cefb2e43f2c358f3a97a31e1be90b.256p.jpg",
    tags: ["CPU", "ryzen", "AMD"]
},
{
    title: "Core i5-12600k",
    category: "CPU",
    stock: 10,
    price: 279,
    describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/3f727799b9fc5e83f0e8953759946bd2.256p.jpg",
    tags: ["CPU", "core", "intel"]
},
{
    title: "Core i7-12700k",
    category: "CPU",
    stock: 10,
    price: 380,
    describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/3f7037db801def4db8418df8e7498e6a.256p.jpg",
    tags: ["CPU", "core", "intel"]
},
{
    title: "Ryzen 9 5950x",
    category: "CPU",
    stock: 10,
    price: 590,
    describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/1d7073a2deda3bd22963a7e248bbe3e4.256p.jpg",
    tags: ["CPU", "ryzen", "AMD"]
},
{
    title: "Core i9-12900k",
    category: "CPU",
    stock: 10,
    price: 228,
    describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/b9d3c68bbf713cdd1211f3792040ce95.256p.jpg",
    tags: ["CPU", "core", "intel"]
},
{
    title: "Ryzen 7 3700x",
    category: "CPU",
    stock: 10,
    price: 349,
    describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/9b4cefb2e43f2c358f3a97a31e1be90b.256p.jpg",
    tags: ["CPU", "ryzen", "AMD"]
},
{
    title: "Ryzen 5 3600x",
    category: "CPU",
    stock: 10,
    price: 366,
    describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/3ef757133d38ac40afe75da691ba7d60.256p.jpg",
    tags: ["CPU", "ryzen", "AMD"]
},
{
    title: "Threadripper 3990x",
    category: "CPU",
    stock: 10,
    price: 8365,
    describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/7e2e7fecadc261c89c70cf3965a97a28.256p.jpg",
    tags: ["CPU", "threadripper", "AMD"]
},
{
    title: "Core i5-10400",
    category: "CPU",
    stock: 10,
    price: 145,
    describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/c18ee131d4d211b2ad40882e5b997371.256p.jpg",
    tags: ["CPU", "core", "intel"]
},
{
    title: "EVGA XC GAMING",
    category: "Video Card",
    stock: 10,
    price: 717,
    describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://m.media-amazon.com/images/I/51ufTnVhMeL.jpg",
    tags: ["Video Card", "EVGA", "3060", "nvidia"]
},
{
    title: "EVGA FTW3 ULTRA GAMING",
    category: "Video Card",
    stock: 10,
    price: 960,
    describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://m.media-amazon.com/images/I/41wNSzchLVS.jpg",
    tags: ["Video Card", "EVGA", "3070ti", "nvidia"]
},
{
    title: "Asus DUAL EVO OC",
    category: "Video Card",
    stock: 10,
    price: 484,
    describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://m.media-amazon.com/images/I/51FcVHzQHZL.jpg",
    tags: ["Video Card", "asus", "2060", "nvidia"]
},
{
    title: "EVGA FTW3 ULTRA GAMING",
    category: "Video Card",
    stock: 10,
    price: 2355,
    describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/2f11da299c23e66859a6955b07835ff6.256p.jpg",
    tags: ["Video Card", "EVGA", "3090", "nvidia"]
},
{
    title: "MSI GTX 1050 Ti 4GT OC",
    category: "Video Card",
    stock: 10,
    price: 215,
    describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/1085f0f0294e6eb6340c70bf6324a9f8.256p.jpg",
    tags: ["Video Card", "MSI", "1050ti", "nvidia"]
},
{
    title: "EVGA FTW3 ULTRA GAMING LE iCX3",
    category: "Video Card",
    stock: 10,
    price: 1629,
    describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://m.media-amazon.com/images/I/41CPjBchLUS.jpg",
    tags: ["Video Card", "EVGA", "3080TI", "nvidia"]
},
{
    title: "MSI GAMING X TRIO",
    category: "Video Card",
    stock: 10,
    price: 1260,
    describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://m.media-amazon.com/images/I/41qWD59dkcS.jpg",
    tags: ["Video Card", "MSI", "6900XT", "AMD"]
},
{
    title: "Gigabyte AORUS MASTER",
    category: "Video Card",
    stock: 10,
    price: 1260,
    describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/36b9edfff520818730e65f88b054a2df.256p.jpg",
    tags: ["Video Card", "Gigabyte", "6800XT", "AMD"]
},
{
    title: "MSI MECH 2X OC",
    category: "Video Card",
    stock: 10,
    price: 830,
    describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://cdna.pcpartpicker.com/static/forever/images/product/e8016f882d63f9ec9ee0bcb8a84c44a7.256p.jpg",
    tags: ["Video Card", "MSI", "6900XT", "AMD"]
},
{
    title: "TITAN RTX",
    category: "Video Card",
    stock: 10,
    price: 3979,
    describe: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum",
    image: "https://m.media-amazon.com/images/I/51ufTnVhMeL.jpg",
    tags: ["Video Card", "NVIDIA", "TITAN", "nvidia"]

}].forEach(async (element) => await ProductsServices.newProduct(element));

connection()
