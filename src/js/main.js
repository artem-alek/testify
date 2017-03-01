function GildedRose (sellIn, quality, name) {
  this.name = name;
  this.sellIn = sellIn;
  this.quality = quality;
}

GildedRose.prototype.looseQuality = function looseQuality () {
  if (this.name === 'Conjured Mana Cake' && this.quality > 0 ) {
    this.quality = this.quality - 2;
  } else if (this.quality > 0) {
    this.quality = this.quality - 1;
  }
};

GildedRose.prototype.addQuality = function () {
  if (this.quality < 50) {
    this.quality = this.quality + 1;
    if (this.name == 'Backstage passes to a TAFKAL80ETC concert' && this.sellIn < 11 && this.quality < 50) {
      this.quality = this.quality + 1;
      if (this.sellIn < 6 && this.quality < 50) {
        this.quality = this.quality + 1;
      }
    }
  }
};

GildedRose.prototype.afterSellDate = function () {
  if (this.name != 'Aged Brie' && this.name != 'Backstage passes to a TAFKAL80ETC concert' && this.quality > 0) {
    if (this.name != 'Sulfuras, Hand of Ragnaros') {
      this.quality = this.quality - 1;
    }
    if (this.name === 'Conjured Mana Cake') {
      this.quality = this.quality - 1;
    }
  }
};

GildedRose.prototype.tick = function () {
  if (this.name != 'Aged Brie' && this.name != 'Backstage passes to a TAFKAL80ETC concert' && this.name != 'Sulfuras, Hand of Ragnaros') {
    this.looseQuality();
  } else {
    this.addQuality();
  }

  if (this.name != 'Sulfuras, Hand of Ragnaros') {
    this.sellIn = this.sellIn - 1;
  }

//   if (this.sellIn < 0) {
//     this.afterSellDate();
//   } else if (this.quality < 50) {
//     this.quality = this.quality + 1;
//   } else {
//     this.quality = this.quality - this.quality;
//   }
// };

  if (this.sellIn < 0) {
    if (this.name != 'Aged Brie') {
      if (this.name != 'Backstage passes to a TAFKAL80ETC concert') {
        if (this.quality > 0) {
          if (this.name != 'Sulfuras, Hand of Ragnaros') {
            this.quality = this.quality - 1;
          }
          if (this.name === 'Conjured Mana Cake') {
            this.quality = this.quality - 1;
          }
        }
      } else {
        this.quality = this.quality - this.quality;
      }
    } else {
      if (this.quality < 50) {
        this.quality = this.quality + 1;
      }
    }
  }
};

//********************ORIGINAL**********************************
// GildedRose.prototype.tick = function () {
//   if (this.name != 'Aged Brie' && this.name != 'Backstage passes to a TAFKAL80ETC concert') {
//     if (this.quality > 0) {
//       if (this.name != 'Sulfuras, Hand of Ragnaros') {
//         this.quality = this.quality - 1;
//         if (this.name === 'Conjured Mana Cake') {
//           this.quality = this.quality - 1;
//         }
//       }
//     }
//   } else {
//     if (this.quality < 50) {
//       this.quality = this.quality + 1;
//       if (this.name == 'Backstage passes to a TAFKAL80ETC concert') {
//         if (this.sellIn < 11) {
//           if (this.quality < 50) {
//             this.quality = this.quality + 1;
//           }
//         }
//         if (this.sellIn < 6) {
//           if (this.quality < 50) {
//             this.quality = this.quality + 1;
//           }
//         }
//       }
//     }
//   }
//   if (this.name != 'Sulfuras, Hand of Ragnaros') {
//     this.sellIn = this.sellIn - 1;
//   }
//   if (this.sellIn < 0) {
//     if (this.name != 'Aged Brie') {
//       if (this.name != 'Backstage passes to a TAFKAL80ETC concert') {
//         if (this.quality > 0) {
//           if (this.name != 'Sulfuras, Hand of Ragnaros') {
//             this.quality = this.quality - 1;
//           }
//           if (this.name === 'Conjured Mana Cake') {
//             this.quality = this.quality - 1;
//           }
//         }
//       } else {
//         this.quality = this.quality - this.quality;
//       }
//     } else {
//       if (this.quality < 50) {
//         this.quality = this.quality + 1;
//       }
//     }
//   }
// };


export { GildedRose };
