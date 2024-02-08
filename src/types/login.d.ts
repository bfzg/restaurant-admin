declare namespace Login {
  type LoginReq = {
    username?: string;
    password?: string;
    remember?: string;
  };

  type LoginRes = {
    token: string;
    userInfo: UserInfo;
  };

  type UserInfo = {
    create_user: string;
    id: string;
    name: string;
    phone: string;
    sex: string;
    update_time: string;
  };
}
