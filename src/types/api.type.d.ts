declare namespace API {
  type ParamsPagingType = {
    page: number;
    pageSize: number;
    type?: number;
  };

  type EmployeeType = {
    code: number;
    message: string;
    data: any;
  };

  //新增菜品中分类flavors
  type FlavorType = {
    dishId?: number;
    id?: number;
    name?: string;
    value?: string;
  };

  //新增 编辑 菜品
  type DishType = {
    categoryId?: number;
    description: string;
    flavors: FlavorType;
    id?: number;
    image: string;
    name: string;
    price: number;
    status: number;
  };
}
