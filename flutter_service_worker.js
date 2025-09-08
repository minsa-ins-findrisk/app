'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "6142104eb79269b6ad8e37119a86ce76",
".git/config": "5ae38f3115ac5a58c472cf539b718828",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e671380b4d83e4e40c922a7f7cd0f3ed",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "54d1435ad72bd4acbc8ab8fa17b2eb7b",
".git/logs/refs/heads/main": "7060474cf6d772711fdd316d8687b613",
".git/logs/refs/remotes/origin/main": "027ff4325be68c80cca39503f08b00b2",
".git/objects/00/4668f229d074fd168fa132888c68ed6507c2ef": "2ee3d18484971295985313109922b253",
".git/objects/00/8320c5da8b038abd54d77e58f7b0a7aff80eb6": "57edce58c07e943777738d7c62dc14c2",
".git/objects/02/e7c1db5147e6c9f4f373ab69d4b25dce1fcf8c": "827ee7cf57a48abf04d5dfae3dcf5024",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/07/ce8a6aa8f42e8b890a417dccc72c4f0f25c064": "e0954bf95a5edb4e8082f9ba669a30e2",
".git/objects/0c/20997a3543337761d5623660cd320e5d967d30": "49de021e2c22ee6b2cc2066a414fe444",
".git/objects/0f/316cd6fdb0acfb53af2392bd34eab3963064f8": "cb9508ad5ee3a33af74ad1a645b62642",
".git/objects/10/95246a1716bbe3a622bfc8ef574529bdb35303": "3789b953cca551b1fa004ca23622b0ea",
".git/objects/10/ec4f00189c1c176d36f15b978a941ccaad9a7d": "59ec7ff0ed6346f82eca66e986999344",
".git/objects/11/b7db7bf155e02bd0b4a6c89e006d21093016c4": "4243c209ae3f822a84c9a7f8e1ddffb2",
".git/objects/12/2d8e02e206aadd85be35c25c005bf2db9641f0": "6de1ccd651178035d2b05d60b3fa5270",
".git/objects/12/b66660403f498ebcf3567382ad806371147f32": "db9bc1642bf656cc04b0228a99847edc",
".git/objects/13/9209699367f55d74ce06417d07246cd783242b": "2ccfdfabc97727f6468f7de15a923725",
".git/objects/14/409f9bbb084128fb938d01a5f1613f15a028b8": "b6b359d3892ceaa783203a6ddc6b586c",
".git/objects/17/6b69ff3fe2c57f025fd58564e5364ab621569d": "222878316ee1a28cf3c05fd31005d442",
".git/objects/1a/d7683b343914430a62157ebf451b9b2aa95cac": "94fdc36a022769ae6a8c6c98e87b3452",
".git/objects/1f/7dfc7c0d7ffc00bf03771f4e4fb17db8d2dc11": "b1da22cec966ef9acf2931d75578590b",
".git/objects/21/b1816bb825ed1c21049d79e6d1ef1019e7bbb5": "b9e57307ecda7f069badb96cd4ba4a0c",
".git/objects/21/bcae70430d177e26b5b3b6c77e7f8a6783d31b": "87a5454709f2cb94ab0073c0a1b6e4a4",
".git/objects/22/1d34b5d3a958fac9d72bf3362513b9506313d1": "65a53474c5f3cc4629bbe366b6d78f78",
".git/objects/23/3dd383b5304390cbc54b5b5b065ed08eb15e02": "6b255308a511cc1dcf4c15e291beeb5e",
".git/objects/25/10fa1a1e973a5407b8082c35622418d005e2f8": "13f76cfd5e7027bef2e5799a14a46125",
".git/objects/26/12bf05cfe05cc7266898d680718702521cca59": "1d327888ab1cd5ff1d1c25818ea714f7",
".git/objects/27/e208a00eeb60154929c76f0046dd096131c6c6": "f7502e8edc077c0cac24faf2bfe1064c",
".git/objects/27/f9e701309a9c69dc127e0eab376406e28791c4": "d6d05b33d71159eb45fca4d278ed3281",
".git/objects/2b/b3e584a926e3fa5de7afa867c32f8c00847bb0": "b6ed9305fb554b43dc100bf5e4bb3e33",
".git/objects/2f/5fa4e12881815e3a45414ff1463f41de11d438": "3f3fad036431985c73b20d45f531be78",
".git/objects/35/4f48b976c84d9d45d79d5686791b22f359ab13": "5f7c997ac409936cf3658f6e1d8642c9",
".git/objects/38/7fe151783c8e88ebe42fe59b7ce87d24d05b8b": "279a799b4e373d8d66a2cb1672cdb810",
".git/objects/39/36aaef98d54c83219292aa9f9bd7007a53fec5": "93b2d5a8a4e8dea84698c00828906e79",
".git/objects/39/ce3f415382264f0a3f4707edde95b34e4d925d": "b00bee1d95228fc94536221cb04b553a",
".git/objects/3a/c6d0502ae91431466c28335539a6cbc9121fe3": "e1fe7bd3e4ec4c007b760a17b6fd491e",
".git/objects/3c/2277e589cbbd6fe02599cf96de2c6edce82cd7": "84b5ec97c1b8bc8f94b6cb1a0406cdc0",
".git/objects/3c/47380ad29d9bc64418f3a1e0b522fce7f8f03e": "2626168203dcae876c06358e288fef9b",
".git/objects/3f/24b50c544f17813085bed36694e57c2ec05478": "4b4da40965a26d3700d2b49fc2312a7a",
".git/objects/42/3e63547f3928db53e8a4edfc3fff4f0445ac54": "7a06e6d4c707d3a6e9acf4ee2c5d8dd9",
".git/objects/44/37c95e85bd5149e099a565a5411440b055bc31": "0e282f280ee966304742d13a5cd57720",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/cb6533cc29dee70e373bd66b5c083431c4a27d": "e4dee64697b9050106f777541e8d7b43",
".git/objects/49/14e1ed1a1c2211c0705423f65d0b25201cd6b3": "39d1756dcb8b4c9d8be2a2159ff17d1a",
".git/objects/49/3e092aa58bb06394c3739fe4794c0c6d4bc814": "0211929df90c13770be1bc3dd82ab044",
".git/objects/4a/42c14c94dc774a74f7ce97a23037eec01518db": "5844d024bb301b0bc6d4aaa322e214f1",
".git/objects/4a/6c11e35effd025052f1e290af5158c057683be": "0881a64cc9fb48718ca0ebdd29ca48f2",
".git/objects/4c/51fb2d35630595c50f37c2bf5e1ceaf14c1a1e": "a20985c22880b353a0e347c2c6382997",
".git/objects/4d/7d47c62d136daf0709fc9b436339c27ca20a24": "7069cb64c5b9535f20a45a80f82b36f4",
".git/objects/4e/51719f66aa910b6f812c42cb7d3804b55421a6": "1f4a2b21651c025fff9147d1627083da",
".git/objects/53/18a6956a86af56edbf5d2c8fdd654bcc943e88": "a686c83ba0910f09872b90fd86a98a8f",
".git/objects/53/3d2508cc1abb665366c7c8368963561d8c24e0": "4592c949830452e9c2bb87f305940304",
".git/objects/53/a03abe683ce4912ede3205af6b429635999c1d": "06c998d980cc4615556f42fb90134ea6",
".git/objects/56/57783394d47f176faae07ff63014b0515746c3": "eddd0dddccd76c9a98bd62c301929acf",
".git/objects/59/66df002ffea2a39903c728c9d5e8aa8f7d87be": "bd7ee1a8775b87e9337362942017d86c",
".git/objects/60/83f5829ed23e3971607ca86a4a604c7f785bd0": "bac2c32d8bfe0b483f03492877eff6f2",
".git/objects/69/b7d797472b1d0b2b791538e38c12745ef25da7": "71ab8a0cd6915dba9759e75fc34d744a",
".git/objects/69/dd618354fa4dade8a26e0fd18f5e87dd079236": "8cc17911af57a5f6dc0b9ee255bb1a93",
".git/objects/6b/9862a1351012dc0f337c9ee5067ed3dbfbb439": "85896cd5fba127825eb58df13dfac82b",
".git/objects/6e/e3d7b68997273860b1c0eb54446094f48c73d0": "5c2efc151ba9e4365b51bc7ffb5f1948",
".git/objects/70/a234a3df0f8c93b4c4742536b997bf04980585": "d95736cd43d2676a49e58b0ee61c1fb9",
".git/objects/73/c63bcf89a317ff882ba74ecb132b01c374a66f": "6ae390f0843274091d1e2838d9399c51",
".git/objects/74/4728229eab4affcc17e99730513c5e73522c6f": "dba0da0afc1d50085baf93506ddf4451",
".git/objects/74/8e3393a84b71c1e65cce7f65e115ae5ce175a2": "aa919ff6da472a8c100888b779cf1bee",
".git/objects/75/1cdbe0eb6dd5e028a2f670a2b19023cd9e0473": "c62554a139ce0b3bf953c5a70a93cac7",
".git/objects/77/668cd51a58296030b57de417ea42c066e5ac4e": "29abfdbe0fe7f739cd1c4bbdba34a985",
".git/objects/78/5ca2cf396d4b7b5c4fceaa91db655c348cdcc0": "8649147a49c7e9371dc106ea1134a30c",
".git/objects/7a/fa15dc7097293b099e19ce46e0a04ed10aecc5": "baa0c8fe831e89d8ec77b459adf8ca90",
".git/objects/7c/b067d8c8a37c439c782c2138e7e5f5ad751b36": "da3f9e0fca893bde09a7c90406a2e2c0",
".git/objects/81/9e23316d06c8d24dcd2eaecfb815cde9d75f98": "73334ccabdb4df3172e9f0c8f886cde8",
".git/objects/83/ee329dc4d6afffcccb280118a415f2e7fab615": "bf1dbb7de9f1b31b604667631de598b8",
".git/objects/86/fa2073001a8952b5d875482bd174631993355d": "6aad05e9ce260154d60fff456afe9cf4",
".git/objects/88/73ad435c4a5bfdd310b55eb085ce4974fe9605": "1bc4fd9c24eaa283a24cdc42ac5dac28",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/512c89a0356e1ded29671fa2b79c221ef88061": "4c01796183bf21febe6f1b290baca9ee",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8e/3c7d6bbbef6e7cefcdd4df877e7ed0ee4af46e": "025a3d8b84f839de674cd3567fdb7b1b",
".git/objects/8f/2ef779ad1746f9168ae10d0e1ed188870a019e": "8746330a7a1d7de020441fe576856a03",
".git/objects/8f/e7af5a3e840b75b70e59c3ffda1b58e84a5a1c": "e3695ae5742d7e56a9c696f82745288d",
".git/objects/90/90820bab48211779bb80309c8c48532fa3cb4e": "5394eaa75cc551af874e9ff09c31327a",
".git/objects/92/926ac22d728ab7db8189b6e07e9d84f032e6ea": "6ba576be4499b575b261497cdec11528",
".git/objects/94/25d64e8d04ed4612837da8abaf0ddb21986baf": "e6d0208eaa6039d3e3d75c00c5910067",
".git/objects/94/ab84cf6b8cb25daa30f3d7af0994b19e424a54": "e4bea2414d0022b7bd677ca343f37ead",
".git/objects/9b/d3accc7e6a1485f4b1ddfbeeaae04e67e121d8": "784f8e1966649133f308f05f2d98214f",
".git/objects/9e/5d28d2a3216b588026e48e86bc175138216b07": "cd10d3e32ab065c3521c5594d4474515",
".git/objects/9f/ae7c39e6d5d9bf04c6b58537b56c7f1a0a06ac": "0d7b8c1ffd09f1bc4cf78b6465a2d478",
".git/objects/a2/588f72a107162888b51edc4c81fee7c0ad6a04": "08ef579056112b63b50602d124c5025d",
".git/objects/a4/b0ef6ba11ea511bfee16d88075a0b0cef7dd99": "1ede4ad3e681e0ba53a6dc5c5602fa7e",
".git/objects/a6/cd99e3f79edb0aea399af3eaac11bf4aed4346": "e907d211e8c2937638e11a74f5339c18",
".git/objects/a8/e1b0a5015069e1810817f7c0a58b5d8b8e149f": "0d1671d346aa37d5a9af29f3ae2bb91f",
".git/objects/aa/29e5ba55d2ba370add333159738de36be13c4e": "4f939a199ed44267494c58ebc9f64717",
".git/objects/aa/3b127b38caf31fe07ac2689a41583ea56b64cf": "6143606dafd146a56b5b193919c1ec74",
".git/objects/ab/0fae6f918679e9ead112650d48a9a80360d46d": "b412da9c73d95bfc5cfd3b54f98fe3e4",
".git/objects/ab/794e9d1ec4c260a5090ca78b66529260a4e346": "21f9718a354d9ba15ae82a0ba6d0c18e",
".git/objects/ac/2545b2013596036ef71634c6e56197381c4cb5": "5775b6795ab1a9924bf8f085efdb9a7e",
".git/objects/ad/d67f31416df8a4de29842626fcaa855e047b5e": "2d32f03775be4e8cd7f1a50a19297696",
".git/objects/b0/5acf19cac417012b8f7d40ef637ac34177fe07": "11cfdf7dc5caa7b00e66a841b9cb13e2",
".git/objects/b2/5e78b3117e0418acc01b31687ccac53093e73a": "947a6556a0b67dc3a82b6e0260a60c52",
".git/objects/b2/d29c97492f71be5a63fbaa36219f9a88a4ee4e": "e6ca4cd509c5fef1dd27147706fd726b",
".git/objects/b6/413ded9428a4436dfffb85050f4be8426f2036": "313c268cb2ebbe1512f0e05ddcf917f9",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b7/9d8e0dee7f9d19f3306df2692660ea9ae23a7c": "8c8d460ff61e4a27401184eb928720df",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/6a5236065a6c0fb7193cb2bb2f538b2d7b4788": "4227e5e94459652d40710ef438055fe5",
".git/objects/ba/1b0546f31e5e4a7914f395718689456a3acae0": "7b176811c4f485707dfe969a3531f987",
".git/objects/c8/08fb85f7e1f0bf2055866aed144791a1409207": "92cdd8b3553e66b1f3185e40eb77684e",
".git/objects/c9/51e06e9bd59d9048c9193c420236a874526c2f": "067ba156c126fa40147593c794b8cae1",
".git/objects/cb/603deb22a8cc492fbd648ed0ac16ae02243248": "a35e1c5c0de7439a01026916aa92bbca",
".git/objects/cc/5d01168a708a61b06c06bb8b8bd4134e957ab7": "3d5db207e8bd97a70ed727d1cb131229",
".git/objects/cc/c5bcce96fd3acd41bc76896bb7278fd53e390f": "662a2f4b4ecfeb4618b173d4e6ef9009",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/b11da79af9b1c4246482f57e0de1d582a506b0": "bb2a30c2dcd98e2a3400a6a0218b75d8",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/7cfefdbe249b8bf90ce8244ed8fc1732fe8f73": "9c0876641083076714600718b0dab097",
".git/objects/d9/96148f1b3968269c4707e280ee3cb71ddb81d5": "6e756d95b4a0eb5917e137ff70de4e18",
".git/objects/dc/11fdb45a686de35a7f8c24f3ac5f134761b8a9": "761c08dfe3c67fe7f31a98f6e2be3c9c",
".git/objects/e0/5f693cb81a5da197c366ba47b9c1f9c8940a90": "df801ee9931d7b6e015528e7e84d2a59",
".git/objects/e0/76359e2d7a7cf4b60f91746824f80972d9c495": "96db8edc172ee43f0dd4071a06420a5c",
".git/objects/e0/7ac7b837115a3d31ed52874a73bd277791e6bf": "74ebcb23eb10724ed101c9ff99cfa39f",
".git/objects/e2/315b8b50a3e1de72680fa303fcb37af4244228": "8f32417a65f8b1d9f660449e1ccbdf91",
".git/objects/e9/94225c71c957162e2dcc06abe8295e482f93a2": "2eed33506ed70a5848a0b06f5b754f2c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/9d7c54b634cb1a08ee903a6b90c587993b0dff": "54d9f4af871bdcf7b0845e280ec9bdfa",
".git/objects/ef/5c000f9e2590dd557d689003615308238ee431": "6365e436e3f8824d55f00a7a4ca0e893",
".git/objects/f1/6276a743214dbf4fcf8fa4942b50899280bcf8": "5701a7062ab944b731b0d26cd251fa24",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f3/1e16599047eccede326f1051a8d5f665ddd6ba": "120ce0df42763993cf71ab1907c81327",
".git/objects/f5/72b90ef57ee79b82dd846c6871359a7cb10404": "e68f5265f0bb82d792ff536dcb99d803",
".git/objects/fa/db8dbc3c7a1dedcc90622f0546769cb89ed004": "dc92b04305fc4b0e29dcdc3061b173a4",
".git/objects/fe/5dad437322fc1045caa022a16d0aa51a2781d5": "687e835adac70c992b2194a8cdc338fe",
".git/objects/ff/2409d8f8264bb50d78a500b33be0009ec5f68d": "9290ae74f2032ed268bee1a3bd1e22cf",
".git/refs/heads/main": "1c87ca0eef7e0114f44141e2325f674c",
".git/refs/remotes/origin/main": "1c87ca0eef7e0114f44141e2325f674c",
"assets/AssetManifest.bin": "c5159c7e3e61a6641ebebd8b646ac16c",
"assets/AssetManifest.bin.json": "666b8d7437b403f8545150ff05b015cc",
"assets/AssetManifest.json": "44d17c018585ae9a34ce00062b55ae8f",
"assets/assets/INS.jpg": "6f31a037aba53532eff2e14f174824d8",
"assets/assets/MINSA.jpg": "a53931533a19f29a620caf2660db1eb3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "aa157b404eb04c7060167b900e916563",
"assets/NOTICES": "409d4c7286ff1c6ce25c294982c131ed",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "728b2d477d9b8c14593d4f9b82b484f3",
"canvaskit/canvaskit.js.symbols": "bdcd3835edf8586b6d6edfce8749fb77",
"canvaskit/canvaskit.wasm": "7a3f4ae7d65fc1de6a6e7ddd3224bc93",
"canvaskit/chromium/canvaskit.js": "8191e843020c832c9cf8852a4b909d4c",
"canvaskit/chromium/canvaskit.js.symbols": "b61b5f4673c9698029fa0a746a9ad581",
"canvaskit/chromium/canvaskit.wasm": "f504de372e31c8031018a9ec0a9ef5f0",
"canvaskit/skwasm.js": "ea559890a088fe28b4ddf70e17e60052",
"canvaskit/skwasm.js.symbols": "e72c79950c8a8483d826a7f0560573a1",
"canvaskit/skwasm.wasm": "39dd80367a4e71582d234948adc521c0",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "83d881c1dbb6d6bcd6b42e274605b69c",
"flutter_bootstrap.js": "24dda08a5cd023e1d9e7cc64e9b486e2",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "e53adfae2110541246c2593666b1c296",
"/": "e53adfae2110541246c2593666b1c296",
"main.dart.js": "913f12ccd7a0ae8df121db9d53804853",
"manifest.json": "8bc29c385287c80171d09d5a841e6eec",
"version.json": "b7e61dadd897404e54e409d518d1fcfb"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
