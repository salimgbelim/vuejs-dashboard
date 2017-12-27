import Vue from 'vue'
import Post from '@/theme/Post'

describe('Post.vue', () => {

  const createComponent = () => {
    const PostConstructor = Vue.extend(Post)
    const comp = new PostConstructor({
      propsData: {
        link: 'http://www.salim.com'
      }
    }).$mount()

    return comp
  }

  it('should render the link', () => {
    const comp = createComponent()

    expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
      .toEqual('http://www.salim.com')
  })

  it('should update element\'s href when property link changes', (done) => {
    const comp = createComponent()

    expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
      .toEqual('http://www.salim.com')

    comp.link = 'http://www.belim.com'
    Vue.nextTick(() => {
      expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
        .toEqual('http://www.belim.com')
      done()
    })

  });

  it('should update element\'s href when property link changes with await', async () => {
    const comp = createComponent()

    expect(comp.$el.querySelector('.card-footer-item').getAttribute('href'))
      .toEqual('http://www.salim.com')

    comp.link = 'http://www.belim.com'
    await Vue.nextTick();

    expect(comp.$el.querySelector('.card-footer-item').getAttribute('href')).toEqual('http://www.belim.com')

  });

})
