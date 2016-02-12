/* eslint-disable no-unused-vars */
import React from 'react';
import {expect} from 'chai';
import Modal from '../';
import {shallow} from 'enzyme';
import sinon from 'sinon';
const {describe, it} = global;

describe('<Modal />', () => {

  it('should render children', () => {
    const el = shallow(<Modal show={true}>dumb modal content</Modal>);
    const children = <div className='modal-children'>dumb modal content</div>;
    expect(el.contains(children))
      .to.equal(true);
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
