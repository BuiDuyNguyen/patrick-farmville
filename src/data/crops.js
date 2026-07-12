// Crop Master là nguồn dữ liệu chuẩn cho toàn bộ loại cây.
//
// Plot chỉ lưu cropId rồi tham chiếu đến đây.
// Nhờ vậy, tên cây, giá mua, giá bán và thời gian lớn
// không bị copy lặp lại trong từng Plot.

export const CROPS = {
  CARROT: {
    cropId: "CARROT",
    cropName: "Carrot",
    cropBuyPrice: 5,
    cropSellPrice: 8,

    // Tạm dùng 10 giây để dễ kiểm thử gameplay.
    // Đơn vị được thống nhất là giây.
    growthTime: 10,
  },
};