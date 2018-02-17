import Vue from 'vue'
import DetailView from '@/components/DetailView'

describe('DetailView.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(DetailView)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.comment span').textContent)
      .to.exist()
  })
})
