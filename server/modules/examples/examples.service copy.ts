// import { Service, Inject } from 'typedi';
// import { ExampleSchema, Example } from './example.model';
// import { MailerService, SendMailOptions } from '../core/mailer.service';
// import * as path from 'path';
// import { Transporter, TransporterService, Action, Event, param } from '@aitheon/transporter';
// import { logger } from '@aitheon/core-server';
// import { Param } from 'routing-controllers';


// @Service()
// @Transporter()
// export class ExamplesService extends TransporterService {

//   @Inject()
//   mailerService: MailerService;

//   @Action()
//   async findAll(): Promise<Example[]> {
//     return ExampleSchema.find();
//     // this.memoryStore.set('LatestSta', data);
//   }

//   @Event()
//   async findEvent(data: any) {
//     logger.info('[findEvent]', data);
//     console.log('[findEvent]', data);
//     this.myIntParam = '';
//     // this.memoryStore.set('eewerw', data, { extend: true });
//     const data = this.snaphost(this.myData);
//     const allData = this.snaphost();
//     // this.mysSUoerData.push(data);
//   }

//   @Event({ name: 'ExamplesService.*' })
//   async allTemplate(payload: any, sender: any, event: any) {
//     console.log(`TEMPLATE2 '${event}' received from ${sender} node:`, payload);

//     const eventNameFromSettings = 'UsersService.subscribed';
//     const serviceName = '';
//     this.broker.emit(eventNameFromSettings, { somedata: '11' }, serviceName);
//     //
//   }

//   @Tick('allTemplateInterval')
//   async allTemplateTick() {
//     const param = 'eewerw';
//     const data = this.memoryStore.get(param);
//   }

//   @Tick(1000) // Cant we set it from an external Param?
//   async allTemplateTick2222222() {
//     const param = 'eewerw';
//     const data = this.memoryStore.get(param);
//   }

//   async test() {
//     try {
//       const result = await this.broker.call<Example[]>('TEMPLATE.ExamplesService.findAll');
//       const eventNameFromSettings = 'UsersService.subscribed';
//       this.broker.emit(eventNameFromSettings, { somedata: '11' }, ['TEMPLATE', 'USERS']);
//       // this.broker.emit('ExamplesService.findEvent', { somedata: '22' });
//       // this.broker.emit('findEvent', { somedata: '33' });
//       // console.log(result);
//     } catch (error) {
//       console.error(error);
//     }
//   }

//   async findByOrg(organizationId: String): Promise<Example[]> {
//     return ExampleSchema.find({ organization: organizationId });
//   }

//   async findByUser(userId: String): Promise<Example[]> {
//     // tslint:disable-next-line:no-null-keyword
//     return ExampleSchema.find({ createdBy: userId, organization: { $eq: null } });
//   }

//   async create(example: Example): Promise<Example> {
//     const exampleSchema = new ExampleSchema(example);
//     return exampleSchema.save();
//   }

//   async update(example: Example): Promise<Example> {
//     // without await will send it async
//     this.sendUpdateEmail();

//     return ExampleSchema.findByIdAndUpdate(example._id, example);
//   }

//   async findById(exampleId: string): Promise<Example> {
//     return ExampleSchema.findById(exampleId);
//   }

//   async remove(exampleId: string): Promise<Example> {
//     return ExampleSchema.findByIdAndRemove(exampleId);
//   }

//   async sendUpdateEmail(): Promise<void> {
//     return new Promise<void>(async (resolve, reject) => {
//       try {
//         const subject = 'Account updated';
//         const emailHtml = await this.mailerService.renderHtml(path.resolve(`./dist/modules/examples/templates/account-update.html`), {
//           subject,
//           userDisplayName: 'Test username',
//         });
//         const options = new SendMailOptions('test@user.com', 'Account updated', emailHtml);
//         await this.mailerService.send(options);
//         resolve();
//       } catch (err) {
//         reject(err);
//       }
//     });
//   }
// }
