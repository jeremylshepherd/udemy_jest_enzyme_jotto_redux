import { ShallowWrapper } from "enzyme";

/**
 * Function to locate Element by TagName, ID, Attribute, etc.
 * @param { ShallowWrapper } wrapper 
 * @param {string} query 
 * @returns { ShallowWrapper }
 */
export const $find = (wrapper : ShallowWrapper, query : string) : ShallowWrapper => wrapper.find(query);

/**
 * Function to locate Element by 'data-jest' attribute value
 * @param wrapper 
 * @param query 
 * @returns 
 */
export const $findByAttr = (wrapper : ShallowWrapper, query : string) : ShallowWrapper => $find(wrapper, `[data-jest='${query}']`);