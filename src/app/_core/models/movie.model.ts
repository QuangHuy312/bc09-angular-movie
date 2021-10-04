export interface Movie {
  maPhim: number;
  tenPhim: string;
  biDanh: string;
  trailer: string;
  hinhAnh: string;
  moTa: string;
  maNhom: string;
  ngayKhoiChieu: string;
  danhGia: number;
}

export interface MovieDetail extends Movie {
  lichChieu: Showtimes[];
}

export interface Showtimes {
  thongTinRap: ThongTinRap;
  maLichChieu: number;
  maRap: number;
  maPhim: number;
  tenPhim: string;
  ngayChieuGioChieu: Date;
  giaVe: number;
  thoiLuong: number;
}

export interface ThongTinRap {
  maRap: number;
  tenRap: string;
  maCumRap: string;
  tenCumRap: string;
  maHeThongRap: string;
  tenHeThongRap: string;
}
