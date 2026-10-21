import test from 'node:test';
import assert from 'node:assert/strict';
import { isValidEmail, isValidPhone, validateRfqForm, filterProjects } from './rfq.ts';
import { PROJECTS_DATA } from '../data/navacoData.ts';

test('isValidEmail handles valid and invalid email formats', () => {
  assert.equal(isValidEmail('sales@navaco.vn'), true);
  assert.equal(isValidEmail('danny.do@port-terminal.com.kh'), true);
  assert.equal(isValidEmail('invalid-email'), false);
  assert.equal(isValidEmail('@nodomain.com'), false);
  assert.equal(isValidEmail(''), false);
});

test('isValidPhone handles various phone number formats', () => {
  assert.equal(isValidPhone('0901331808'), true);
  assert.equal(isValidPhone('+84 90 133 1808'), true);
  assert.equal(isValidPhone('028-3829-1234'), true);
  assert.equal(isValidPhone('123'), false); // too short
  assert.equal(isValidPhone('abcdefghijk'), false);
});

test('validateRfqForm catches missing required fields', () => {
  const result = validateRfqForm({
    fullName: '',
    company: '',
    email: 'bad-email',
    phone: '',
    needs: []
  }, 'vi');

  assert.equal(result.isValid, false);
  assert.ok(result.errors.fullName);
  assert.ok(result.errors.company);
  assert.ok(result.errors.email);
  assert.ok(result.errors.phone);
  assert.ok(result.errors.needs);
});

test('validateRfqForm passes when all required fields are valid', () => {
  const result = validateRfqForm({
    fullName: 'Nguyen Van A',
    company: 'Saigon NewPort (SNP)',
    position: 'Technical Director',
    email: 'a.nguyen@saigonport.vn',
    phone: '0909123456',
    country: 'vietnam',
    needs: ['Bảo trì (FCM)', 'Nâng cấp RTG'],
    equipmentType: 'RTG Crane',
    equipmentBrand: 'Kalmar',
    message: 'Can bao gia kiem tra he thong dien RTG'
  }, 'vi');

  assert.equal(result.isValid, true);
  assert.equal(Object.keys(result.errors).length, 0);
});

test('filterProjects correctly filters by country and service', () => {
  const cambodiaProjects = filterProjects(PROJECTS_DATA, '', 'cambodia', 'all');
  assert.ok(cambodiaProjects.length >= 2);
  assert.ok(cambodiaProjects.every(p => p.country === 'cambodia'));

  const vietnamProjects = filterProjects(PROJECTS_DATA, '', 'vietnam', 'all');
  assert.ok(vietnamProjects.length >= 2);
  assert.ok(vietnamProjects.every(p => p.country === 'vietnam'));

  const retrofitProjects = filterProjects(PROJECTS_DATA, '', 'all', 'retrofit');
  assert.ok(retrofitProjects.every(p => p.serviceType === 'retrofit'));

  const searchResults = filterProjects(PROJECTS_DATA, 'Sihanoukville', 'all', 'all');
  assert.ok(searchResults.length >= 1);
  assert.ok(searchResults[0].id === 'sihanoukville-rtg');
});
