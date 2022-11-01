export enum Upkind {
  DOG = 417000,
  CAT = 422400,
  ETC = 429900,
}

export interface Animal {
  desertionNo: string; // 유기번호
  filename: string; // 섬네일이미지
  happenDt: string; // 접수일
  happenPlace: string; // 발견장소;
  kindCd: string; // 품종
  colorCd: string; // 색상
  age: string; // 나이
  weight: string; // 체중
  noticeNo: string; // 공고번호
  noticeSdt: string; // 공고시작일
  noticeEdt: string; // 공고종료일(YYMMDD)
  popfile: string; // 이미지
  processState: string; // 상태
  sexCd: "M" | "F" | "Q"; // 성별
  neuterYn: "Y" | "N" | "U"; // 중성화여부
  specialMark: string; // 특징
  careNm: string; // 보호소이름
  careTel: string; // 보호소전화번호
  careAddr: string; // 보호장소
  orgNm: string; // 관할기관
  chargeNm: string; // 담당자
  officetel: string; // 담당자연락처
  noticeComment: string; // 특이사항
}
export interface AnimalWithUpKind extends Animal {
  upkind: Upkind; // 축종코드
  upkindNm: string; // 축종코드이름
}

export interface Comment {
  writer: string; // 작성자
  content: string; // 내용
  writeAt: Date; // 작성일자
}
