import {expect} from 'chai';
import Modal from '../';
import {shallow} from 'enzyme';
import sinon from 'sinon';
import React from 'react';
const {describe, it} = global;

describe('<Modal />', () => {

  it('should render children', () => {
    const el = shallow(<Modal show={true}>dumb modal content</Modal>);
    expect(el.contains(<div className='modal-children'>dumb modal content</div>)).
      to.equal(true);
  });

  it('should close when clicks overlay', () => {
    const onCloseClick = sinon.spy();
    const el = shallow(
        <Modal show={true} close={onCloseClick}>
        dumb modal content
      </Modal>
    );
    el.find('div.overlay').simulate('click');
    expect(onCloseClick.calledOnce).to.equal(true);
  });


  it('should close when clicks close button', () => {
    const onCloseClick = sinon.spy();
    const el = shallow(
        <Modal show={true} close={onCloseClick}>
        dumb modal content
      </Modal>
    );
    el.find('a.close-icon').simulate('click');
    expect(onCloseClick.calledOnce).to.equal(true);
  });

  it('should not render when you pass show=false as prop ', () => {
    const el = shallow(<Modal show={false}></Modal>);
    expect(el.html()).to.equal('<div></div>');
  });

});
