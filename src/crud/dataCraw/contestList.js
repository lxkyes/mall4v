export const tableOption = {
  border: true,
  selection: true,
  index: false,
  indexLabel: '序号',
  stripe: true,
  menuAlign: 'center',
  menuWidth: 350,
  align: 'center',
  refreshBtn: true,
  searchSize: 'mini',
  addBtn: false,
  editBtn: false,
  delBtn: false,
  viewBtn: false,
  props: {
    label: 'label',
    value: 'value'
  },
  column: [{
    label: '年份',
    prop: 'year',
    search: true
  }, {
    label: '名称',
    prop: 'name'
  }, {
    label: 'contestId',
    prop: 'contestId'
  }, {
    label: '参与用户数',
    prop: 'numPlayers'
  }, {
    label: '产品图片',
    prop: 'pic',
    type: 'upload',
    width: 150,
    listType: 'picture-img'

  }, {
    width: 150,
    label: '状态',
    prop: 'status',
    search: true,
    slot: true,
    type: 'select',
    dicData: [
      {
        label: '未上架',
        value: 0
      }, {
        label: '上架',
        value: 1
      }
    ]
  }]
}
