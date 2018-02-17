import Vue from 'vue'
import HomeView from '@/components/HomeView'

describe('HomeView.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(HomeView)
    const vm = new Constructor().$mount()
    expect(vm.$el.querySelector('.add-picture-button i').textContent).to.equal(
      'add'
    )
  })
})
