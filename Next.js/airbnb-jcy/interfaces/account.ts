export default interface AccountData {
  email: string; // 계정 이름
  password: string; // 계정 비번
  firstname: string; // 사용자 - 성
  lastname: string; // 사용자 - 이름
  dob: string; // 생일 -
  promotion?: Date; // 프로모션 동의 날짜
  status?: Date; // 최종약관 동의 날짜
  provider?: string;
  providerAccountId?: string;
}
