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
    label: '语言',
    prop: 'codeType'
  }, {
    label: '作者',
    prop: 'author',
    search: true
  }, {
    label: '题目id',
    prop: 'subjectId',
    search: true
  }]
}
